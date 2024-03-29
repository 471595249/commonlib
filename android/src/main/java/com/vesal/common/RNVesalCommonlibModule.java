
package com.vesal.common;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RNVesalCommonlibModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNVesalCommonlibModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNVesalCommonlib";
  }
}