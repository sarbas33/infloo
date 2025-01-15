1. Added following to disable dark mode: 

<style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
    <item name="android:forceDarkAllowed">false</item>
</style>
please refer how to disable in ios. may be the following will work:
<key>UIUserInterfaceStyle</key>
<string>Light</string>