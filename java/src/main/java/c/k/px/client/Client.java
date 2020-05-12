package c.k.px.client;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import c.k.px.server.Server;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;

import c.k.px.px.*;
import io.grpc.stub.StreamObserver;

public class Client {

  private static final Logger logger = Logger.getLogger(Client.class.getName());

  private final BrowserGrpc.BrowserBlockingStub blockingStub;

//  private final BrowserGrpc.BrowserStub asyncStub;

  private final ManagedChannel channel;

  private final String url;

  private Server server;

  private boolean debug;

  private List<StreamObserver> streamObservers = new ArrayList<>();

  public Client() {
    this(null, false);
  }

  public Client(String url) {
    this(url, false);
  }

  public Client(String url, boolean debug) {
    if (url == null) {
      this.server = new Server();
      url = String.format("localhost:%s", this.server.getPort());
    }
    this.url = url;
    this.channel = ManagedChannelBuilder.forTarget(this.url).usePlaintext().build();
    this.blockingStub = BrowserGrpc.newBlockingStub(channel).withWaitForReady();
//    this.asyncStub = BrowserGrpc.newStub(channel).withWaitForReady();
    this.debug = debug;
  }

  public void clearAndType(String selector, String text) {
    ClearAndTypeAction clearAndTypeAction = ClearAndTypeAction.newBuilder()
        .setSelector(selector)
        .setText(text)
        .build();
    Action action = Action.newBuilder().setClearAndTypeAction(clearAndTypeAction).build();
    this.doRequest(action);
  }

  public void click(String selector) {
    ClickAction clickAction = ClickAction.newBuilder()
        .setSelector(selector)
        .build();
    Action action = Action.newBuilder().setClickAction(clickAction).build();
    this.doRequest(action);
  }

  public void click(String selector, String button, int clickCount) {
    ClickAction clickAction = ClickAction.newBuilder()
        .setSelector(selector)
        .setButton(button)
        .setClickCount(clickCount)
        .build();
    Action action = Action.newBuilder().setClickAction(clickAction).build();
    this.doRequest(action);
  }

  public void close() {
    CloseAction closeAction = CloseAction.newBuilder()
        .build();
    Action action = Action.newBuilder().setCloseAction(closeAction).build();
    this.doRequest(action);
  }

  public void cookies() {
    CookiesAction cookiesAction = CookiesAction.newBuilder()
        .build();
    Action action = Action.newBuilder().setCookiesAction(cookiesAction).build();
    this.doRequest(action);
  }

  public void deleteCookies() {
    CookiesAction cookiesAction = CookiesAction.newBuilder()
        .build();
    Action action = Action.newBuilder().setCookiesAction(cookiesAction).build();
    this.doRequest(action);
  }

  public void getInnerText(String selector) {
    GetInnerTextAction getInnerTextAction = GetInnerTextAction.newBuilder()
        .setSelector(selector)
        .build();
    Action action = Action.newBuilder().setGetInnerTextAction(getInnerTextAction).build();
    this.doRequest(action);
  }

  public void go(String url) {
    GotoAction gotoAction = GotoAction.newBuilder()
        .setUrl(url)
        .build();
    Action action = Action.newBuilder().setGotoAction(gotoAction).build();
    this.doRequest(action);
  }

  public void launch() {
    LaunchAction launchAction = LaunchAction.newBuilder()
        .build();
    Action action = Action.newBuilder().setLaunchAction(launchAction).build();
    this.doRequest(action);
  }

  public void select(String selector, List<String> values) {
    SelectAction.Builder selectActionBuilder = SelectAction.newBuilder();
    selectActionBuilder.setSelector(selector);
    for (String value : values) {
      selectActionBuilder.addValues(value);
    }
    Action action = Action.newBuilder().setSelectAction(selectActionBuilder).build();
    this.doRequest(action);
  }

  public void type(String selector, String text) {
    TypeAction typeAction = TypeAction.newBuilder()
        .setSelector(selector)
        .setText(text)
        .build();
    Action action = Action.newBuilder().setTypeAction(typeAction).build();
    this.doRequest(action);
  }

  public void doRequest(Action action) {
    DoRequest request = DoRequest.newBuilder().addActions(action).build();
    DoResponse response = this.blockingStub.do_(request);
//    StreamObserver streamObserver = new StreamObserver() {
//      @Override
//      public void onNext(Object o) {
//
//      }
//
//      @Override
//      public void onError(Throwable throwable) {
//
//      }
//
//      @Override
//      public void onCompleted() {
//
//      }
//    };
//    this.streamObservers.add(streamObserver);
//    asyncStub.do_(request, streamObserver);
  }

  public void closeChannel() {
    if (channel != null) {
      channel.shutdown();
    }
    if (this.server != null) {
      this.server.stop();
    }
  }
}
