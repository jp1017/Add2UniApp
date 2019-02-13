package com.qdrsd.add2uniapp.listener;

import android.app.Activity;
import android.view.KeyEvent;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;
import android.widget.LinearLayout;

import io.dcloud.common.DHInterface.ICore;
import io.dcloud.common.DHInterface.IWebview;
import io.dcloud.common.DHInterface.IWebviewStateListener;
import io.dcloud.feature.internal.sdk.SDK;

/**
 * 文 件 名: WebviewModeListener
 * 创 建 人: 蒋朋
 * 创建日期: 2019-02-13 16:07
 */

public class WebviewModeListener implements ICore.ICoreStatusListener {
    View splashView = null;
    IWebview webview = null;
    LinearLayout btns = null;
    Activity activity = null;
    ViewGroup mRootView = null;

    public WebviewModeListener(Activity activity, ViewGroup rootView) {
        this.activity = activity;
        mRootView = rootView;
/*        btns = new LinearLayout(activity);
        mRootView.setBackgroundColor(0xffffffff);
        mRootView.getViewTreeObserver().addOnGlobalLayoutListener(new ViewTreeObserver.OnGlobalLayoutListener() {
            @Override
            public void onGlobalLayout() {
                webview.onRootViewGlobalLayout(mRootView);
            }
        });*/
    }

    @Override
    public void onCoreInitEnd(ICore coreHandler) {
        //设置单页面集成的appid
        String appid = "HelloH5";
        // 单页面集成时要加载页面的路径，可以是本地文件路径也可以是网络路径
//        String url = "file:///android_asset/apps/HelloH5/www/index.html";
        String url = "{url:'http://www.bbzuche.com'}";
        webview = SDK.createWebview(activity, url, appid, new IWebviewStateListener() {
            @Override
            public Object onCallBack(int pType, Object pArgs) {
                switch (pType) {
                    case IWebviewStateListener.ON_WEBVIEW_READY:
                        // 准备完毕之后添加webview到显示父View中，设置排版不显示状态，避免显示webview时，html内容排版错乱问题
                        ((IWebview) pArgs).obtainFrameView().obtainMainView().setVisibility(View.INVISIBLE);
                        SDK.attach(mRootView, ((IWebview) pArgs));
                        break;
                    case IWebviewStateListener.ON_PAGE_STARTED:

                        break;
                    case IWebviewStateListener.ON_PROGRESS_CHANGED:

                        break;
                    case IWebviewStateListener.ON_PAGE_FINISHED:
                        // 页面加载完毕，设置显示webview
                        webview.obtainFrameView().obtainMainView().setVisibility(View.VISIBLE);
                        break;
                }
                return null;
            }
        });

        final WebView webviewInstance = webview.obtainWebview();
        // 监听返回键
        webviewInstance.setOnKeyListener(new View.OnKeyListener() {
            @Override
            public boolean onKey(View v, int keyCode, KeyEvent event) {
                if (keyCode == KeyEvent.KEYCODE_BACK) {
                    if (webviewInstance.canGoBack()) {
                        webviewInstance.goBack();
                        return true;
                    }
                }
                return false;
            }
        });
    }

    @Override
    public void onCoreReady(ICore coreHandler) {
        try {
            SDK.initSDK(coreHandler);
            SDK.requestAllFeature();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public boolean onCoreStop() {
        return false;
    }

/*    @Override
    public Object onCreateSplash(Context pContextWrapper) {
        splashView = new FrameLayout(activity);
        splashView.setBackgroundResource(RInformation.DRAWABLE_SPLASH);
        mRootView.addView(splashView);
        return null;
    }

    @Override
    public void onCloseSplash() {
        mRootView.removeView(splashView);
    }*/
}

