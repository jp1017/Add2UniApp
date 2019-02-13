package com.qdrsd.add2uniapp.listener;

import android.app.Activity;
import android.app.ProgressDialog;
import android.view.View;
import android.view.ViewGroup;

import io.dcloud.common.DHInterface.IApp;
import io.dcloud.common.DHInterface.ICore;
import io.dcloud.common.DHInterface.IWebview;
import io.dcloud.common.DHInterface.IWebviewStateListener;
import io.dcloud.feature.internal.sdk.SDK;

/**
 * 文 件 名: WebappModeListener
 * 创 建 人: 蒋朋
 * 创建日期: 2019-02-13 16:06
 */

public class WebappModeListener implements ICore.ICoreStatusListener {
    Activity activity;
    View splashView = null;
    ViewGroup rootView;
    IApp app = null;
    ProgressDialog pd = null;

    public WebappModeListener(Activity activity, ViewGroup rootView) {
        this.activity = activity;
        this.rootView = rootView;
    }

    @Override
    public void onCoreInitEnd(ICore coreHandler) {

        //创建默认webapp，赋值appid
        String appBasePath = "/apps/HelloH5";//必须和assets\apps的项目名一致
        String args = "{url:'http://www.bbzuche.com'}";//设置启动参数,json格式,一般为null

        app = SDK.startWebApp(activity, appBasePath, args, new IWebviewStateListener() {
            @Override
            public Object onCallBack(int pType, Object pArgs) {

                switch (pType) {
                    case IWebviewStateListener.ON_WEBVIEW_READY:
                        //准备完毕之后添加webview到显示父View中，设置排版不显示状态，避免显示webview时，html内容排版错乱问题
                        View view = ((IWebview) pArgs).obtainApp().obtainWebAppRootView().obtainMainView();
                        view.setVisibility(View.INVISIBLE);
                        rootView.addView(view, 0);
                        break;
                    case IWebviewStateListener.ON_PAGE_STARTED:
                        pd = ProgressDialog.show(activity, "加载中", "0/100");
                        break;
                    case IWebviewStateListener.ON_PROGRESS_CHANGED:
                        if (pd != null) {
                            pd.setMessage(pArgs + "/100");
                        }
                        break;
                    case IWebviewStateListener.ON_PAGE_FINISHED:
                        if (pd != null) {
                            pd.dismiss();
                            pd = null;
                        }
                        //页面加载完毕，设置显示webview
                        app.obtainWebAppRootView().obtainMainView().setVisibility(View.VISIBLE);
                        break;
                }
                return null;
            }
        }, null);//启动webapp
        app.setIAppStatusListener(new IApp.IAppStatusListener() {

            @Override
            public boolean onStop() {
                rootView.removeView(app.obtainWebAppRootView().obtainMainView());
                return true;
            }

            @Override
            public String onStoped(boolean b, String s) {
                return s;
            }

            @Override
            public void onStart() {

            }

            @Override
            public void onPause(IApp oldApp, IApp newApp) {

            }
        });
    }

    @Override
    public void onCoreReady(ICore coreHandler) {
        //加载自定runtime使用的路径
        SDK.initSDK(coreHandler);
        SDK.requestAllFeature();
    }

    @Override
    public boolean onCoreStop() {
        //当返回false时候回关闭activity
        return false;
    }

/*    @Override
    public Object onCreateSplash(Context pContextWrapper) {
        splashView = new FrameLayout(activity);
        splashView.setBackgroundResource(RInformation.DRAWABLE_SPLASH);
        rootView.addView(splashView);
        return null;
    }

    @Override
    public void onCloseSplash() {
        rootView.removeView(splashView);
    }*/
}

