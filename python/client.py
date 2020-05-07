import grpc
import px.px_pb2 as px
from px.px_pb2_grpc import BrowserStub
from timeit import default_timer as timer

def launch():
    return px.Action(launchAction=px.LaunchAction(headless=False))

def goto(url):
    return px.Action(gotoAction=px.GotoAction(url=url))

def type(selector, text):
    return px.Action(typeAction=px.TypeAction(selector=selector, text=text))

def click(selector):
    return px.Action(clickAction=px.ClickAction(selector=selector))

def select(selector, values):
    return px.Action(selectAction=px.SelectAction(selector=selector, values=values))

def get_text(selector):
    return px.Action(getInnerTextAction=px.GetInnerTextAction(selector=selector))

def doActions(stub):
    start = timer()
    actions = [
        type(selector='#first-name', text='First Name'),
        type(selector='#last-name', text='Last Name'),
        click(selector='input[type=radio][name=gender]'),
        click(selector='#dob'),
        click(selector='body > div.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-top > div.datepicker-days > table > tbody > tr:nth-child(1) > td:nth-child(1)'),
        type(selector='#address', text='Address'),
        type(selector='#email', text='email@email.com'),
        type(selector='#password', text='Password'),
        type(selector='#company', text='Company'),
        select(selector='#role', values=['Manager']),
        select(selector='#expectation', values=['High salary']),
        click(selector='.development-ways .checkbox:nth-child(1) input'),
        click(selector='.development-ways .checkbox:nth-child(2) input'),
        click(selector='.development-ways .checkbox:nth-child(3) input'),
        click(selector='.development-ways .checkbox:nth-child(4) input'),
        click(selector='.development-ways .checkbox:nth-child(5) input'),
        click(selector='.development-ways .checkbox:nth-child(6) input'),
        type(selector='#comment', text='Comment'),
        click(selector='#submit'),
        get_text(selector='#submit-msg'),
    ]
    request = px.DoRequest(actions=actions)
    stub.Do(request)
    elapsed = timer() - start
    print('Elapsed: {:.3f}s'.format(elapsed))


def do(stub):
    actions = [
        launch(),
        goto(url='https://katalon-test.s3.amazonaws.com/aut/html/form.html')
    ]
    request = px.DoRequest(actions=actions)
    stub.Do(request)
    doActions(stub)


def run():
    with grpc.insecure_channel('localhost:50000') as channel:
        stub = BrowserStub(channel)
        do(stub)


if __name__ == "__main__":
    run()
