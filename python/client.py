import grpc
import px.px_pb2 as px
from px.px_pb2_grpc import BrowserStub
from server import Server

class Client:

    channel = None

    stub = None

    debug = False

    server = None

    def __init__(self, url=None, debug=False):
        self.server = Server()
        self.channel = grpc.insecure_channel('localhost:' + self.server.port)
        self.stub = BrowserStub(self.channel)
        self.debug = debug

    def __del__(self):
        self.channel.close()
        print('Channel closed')

    def do_request(self, actions):
        request = px.DoRequest(actions=[actions])
        self.stub.Do(request)

    def clearAndType(self, selector, text):
        actions = px.Action(clearAndTypeAction=px.ClearAndTypeAction(selector=selector, text=text))
        self.do_request(actions)

    def click(self, selector, button=None, clickCount=None):
        actions = px.Action(clickAction=px.ClickAction(selector=selector, button=button, clickCount=clickCount))
        self.do_request(actions)

    def close(self):
        actions = px.Action(closeAction=px.CloseAction())
        self.do_request(actions)

    def cookies(self):
        actions = px.Action(cookiesAction=px.CookiesAction())
        self.do_request(actions)

    def deleteCookies(self):
        actions = px.Action(deleteCookiesAction=px.DeleteCookiesAction())
        self.do_request(actions)

    def get_text(self, selector):
        actions = px.Action(getInnerTextAction=px.GetInnerTextAction(selector=selector))
        self.do_request(actions)

    def goto(self, url):
        actions = px.Action(gotoAction=px.GotoAction(url=url))
        self.do_request(actions)

    def launch(self):
        actions = px.Action(launchAction=px.LaunchAction())
        self.do_request(actions)

    def select(self, selector, values):
        actions = px.Action(selectAction=px.SelectAction(selector=selector, values=values))
        self.do_request(actions)

    def type(self, selector, text):
        actions = px.Action(typeAction=px.TypeAction(selector=selector, text=text))
        self.do_request(actions)
