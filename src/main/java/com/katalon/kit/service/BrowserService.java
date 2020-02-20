package com.katalon.kit.service;

import com.katalon.kit.px.BrowserGrpc;
import com.katalon.kit.px.DoRequest;
import com.katalon.kit.px.DoResponse;

import io.grpc.stub.StreamObserver;

public class BrowserService extends BrowserGrpc.BrowserImplBase {

  @Override
  public void do_(DoRequest request, StreamObserver<DoResponse> responseObserver) {
    DoResponse response = DoResponse.newBuilder().setResult("Success").build();
    responseObserver.onNext(response);
    responseObserver.onCompleted();
  }
}
