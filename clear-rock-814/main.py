# -*- coding: utf-8 -*-
#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
from webapp2 import cached_property
from webapp2_extras import jinja2

TEMPLATE_DEBUG = True

def getApi():
   from google.appengine.api import memcache       
   data = memcache.get("data")
   
   if (data is None):
        from google.appengine.api import urlfetch            
        import json            
        url = "https://marketplace.firefox.com/api/v2/apps/search/?q=asikersoft"                     
        result = urlfetch.fetch(
            url=url,            
            method=urlfetch.GET,
            headers={'Content-Type': 'application/json'}
            )       
        data = json.loads(result.content)
        memcache.set("data",data)
   return data


class BaseHandler(webapp2.RequestHandler):

    @cached_property
    def jinja2(self):
        # Returns a Jinja2 renderer cached in the app registry.
        return jinja2.get_jinja2(app=self.app)

    def render_response(self, _template, **context):
        # Renders a template and writes the result to the response.
        rv = self.jinja2.render_template(_template, **context)
        self.response.write(rv)

        
class GameDetailHandler(BaseHandler):
    def get(self):
       obj = {}        
       context = {"model" : obj};        
       self.render_response('gamedetail.html',**context)
        
class CategoryDetailHandler(BaseHandler):
    def get(self):
       obj = getApi()       
       context = {"model" : obj};        
       self.render_response('categorydetail.html',**context)
        
      
class MainHandler(BaseHandler):
    def getApi(self):
       from google.appengine.api import memcache       
       data = memcache.get("data")
       
       if (data is None):
            from google.appengine.api import urlfetch            
            import json            
            url = "https://marketplace.firefox.com/api/v2/apps/search/?q=asikersoft"                     
            result = urlfetch.fetch(
                url=url,            
                method=urlfetch.GET,
                headers={'Content-Type': 'application/json'}
                )       
            data = json.loads(result.content)
            memcache.set("data",data)
       return data
    
    def get(self):      
        obj = self.getApi()        
        context = {"model" : obj , "TEMPLATE_DEBUG": TEMPLATE_DEBUG};        
        self.render_response('site/index.html',**context)

       
       
       
routes = [       
        (r'/categorydetail.html', 'main.CategoryDetailHandler'),
        (r'/gamedetail.html', 'main.GameDetailHandler'),
        (r'/.*', 'main.MainHandler'),
    ]

app = webapp2.WSGIApplication(
    routes=routes,
    debug=True)
