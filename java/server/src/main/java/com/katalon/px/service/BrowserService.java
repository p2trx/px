package com.katalon.px.service;

import com.katalon.px.BrowserGrpc;
import com.katalon.px.DoRequest;
import com.katalon.px.DoResponse;

import io.grpc.stub.StreamObserver;

public class BrowserService extends BrowserGrpc.BrowserImplBase {

  @Override
  public void do_(DoRequest request, StreamObserver<DoResponse> responseObserver) {
    DoResponse response = DoResponse.newBuilder().setResult("Success").build();
    responseObserver.onNext(response);
    responseObserver.onCompleted();
  }
}
