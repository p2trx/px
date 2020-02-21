package c.k.px.service;

import c.k.px.BrowserGrpc;
import c.k.px.DoRequest;
import c.k.px.DoResponse;

import io.grpc.stub.StreamObserver;

public class BrowserService extends BrowserGrpc.BrowserImplBase {

  @Override
  public void do_(DoRequest request, StreamObserver<DoResponse> responseObserver) {
    DoResponse response = DoResponse.newBuilder().setResult("Success").build();
    responseObserver.onNext(response);
    responseObserver.onCompleted();
  }
}
