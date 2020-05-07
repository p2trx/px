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
        px.Action(selectAction=px.SelectAction(
            selector='#role', values=['Manager'])),
        px.Action(selectAction=px.SelectAction(
            selector='#expectation', values=['High salary'])),
        px.Action(clickAction=px.ClickAction(
            selector='.development-ways .checkbox:nth-child(1) input')),
        px.Action(clickAction=px.ClickAction(
            selector='.development-ways .checkbox:nth-child(2) input')),
        px.Action(clickAction=px.ClickAction(
            selector='.development-ways .checkbox:nth-child(3) input')),
        px.Action(clickAction=px.ClickAction(
            selector='.development-ways .checkbox:nth-child(4) input')),
        px.Action(clickAction=px.ClickAction(
            selector='.development-ways .checkbox:nth-child(5) input')),
        px.Action(clickAction=px.ClickAction(
            selector='.development-ways .checkbox:nth-child(6) input')),
        px.Action(typeAction=px.TypeAction(
            selector='#comment', text='Comment')),
        px.Action(clickAction=px.ClickAction(selector='#submit')),
        px.Action(getInnerTextAction=px.GetInnerTextAction(
            selector='#submit-msg')),
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
