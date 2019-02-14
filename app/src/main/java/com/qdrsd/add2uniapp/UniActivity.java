package com.qdrsd.add2uniapp;

import android.app.Activity;
import android.content.Intent;
import android.content.res.Configuration;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.Menu;
import android.view.Window;
import android.widget.FrameLayout;

import com.qdrsd.add2uniapp.listener.WebappModeListener;
import com.qdrsd.add2uniapp.listener.WebviewModeListener;

import io.dcloud.EntryProxy;
import io.dcloud.common.DHInterface.ICore;
import io.dcloud.common.DHInterface.ISysEventListener.SysEventType;
import io.dcloud.feature.internal.sdk.SDK;

public class UniActivity extends Activity {
    EntryProxy mEntryProxy = null;
    int id;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent intent = getIntent();
        if (intent != null) {
            id = intent.getIntExtra("id", 0);
        }
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        if (mEntryProxy == null) {
            //这个FrameLayout是用来承载html的,可以放到任何你想放到的位置,比如点击一个按钮,弹窗或者打开新Activity展示
            FrameLayout f = new FrameLayout(this);
            ICore.ICoreStatusListener wm = new WebviewModeListener(this, f);
            if (id != 0) {
                wm = new WebappModeListener(this, f);
            }

//            wm = new WebappModeListener(this, f, id);

            mEntryProxy = EntryProxy.init(this, wm);
            if (id == 0) {
                mEntryProxy.onCreate(this, savedInstanceState, SDK.IntegratedMode.WEBVIEW, null);
            } else {
                mEntryProxy.onCreate(this, savedInstanceState, SDK.IntegratedMode.WEBAPP, null);
            }
            setContentView(f);//我这里的话,直接用activity展示,并在AndroidManifest.xml设置启动就打开本界面
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        return mEntryProxy.onActivityExecute(this, SysEventType.onCreateOptionMenu, menu);
    }

    @Override
    public void onPause() {
        super.onPause();
        mEntryProxy.onPause(this);
    }

    @Override
    public void onResume() {
        super.onResume();
        mEntryProxy.onResume(this);
    }

    @Override
    public void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        if (intent.getFlags() != 0x10600000) {//非点击icon调用activity时才调用newintent事件
            mEntryProxy.onNewIntent(this, intent);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mEntryProxy.onStop(this);
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        boolean _ret = mEntryProxy.onActivityExecute(this, SysEventType.onKeyDown, new Object[]{keyCode, event});
        return _ret ? _ret : super.onKeyDown(keyCode, event);
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        boolean _ret = mEntryProxy.onActivityExecute(this, SysEventType.onKeyUp, new Object[]{keyCode, event});
        return _ret ? _ret : super.onKeyUp(keyCode, event);
    }

    @Override
    public boolean onKeyLongPress(int keyCode, KeyEvent event) {
        boolean _ret = mEntryProxy.onActivityExecute(this, SysEventType.onKeyLongPress, new Object[]{keyCode, event});
        return _ret ? _ret : super.onKeyLongPress(keyCode, event);
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        try {
            int temp = this.getResources().getConfiguration().orientation;
            if (mEntryProxy != null) {
                mEntryProxy.onConfigurationChanged(this, temp);
            }
            super.onConfigurationChanged(newConfig);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        mEntryProxy.onActivityExecute(this, SysEventType.onActivityResult, new Object[]{requestCode, resultCode, data});
    }

}
