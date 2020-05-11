import grpc
import px.px_pb2 as px
from px.px_pb2_grpc import BrowserStub

class Client:

    channel = None

    stub = None

    debug = False

    def __init__(self, url, debug=False):
        self.channel = grpc.insecure_channel(url)
        self.stub = BrowserStub(self.channel)
        self.debug = debug

    def __del__(self):
        self.channel.close()
        print('Channel closed')

    def launch(self):
        action = px.Action(launchAction=px.LaunchAction(headless=False))
        return self.do_request(actions=[action])


    def goto(self, url):
        actions = px.Action(gotoAction=px.GotoAction(url=url))
        return self.do_request(actions=[actions])


    def type(self, selector, text):
        actions = px.Action(typeAction=px.TypeAction(selector=selector, text=text))
        return self.do_request(actions=[actions])


    def click(self, selector):
        actions = px.Action(clickAction=px.ClickAction(selector=selector))
        return self.do_request(actions=[actions])


    def select(self, selector, values):
        actions = px.Action(selectAction=px.SelectAction(selector=selector, values=values))
        return self.do_request(actions=[actions])


    def get_inner_text(self, selector):
        actions = px.Action(getInnerTextAction=px.GetInnerTextAction(selector=selector))
        return self.do_request(actions=[actions])

    def do_request(self, actions):
        request = px.DoRequest(actions=actions)
        return self.stub.Do(request)
