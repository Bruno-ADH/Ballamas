# Installing Webfonts
Follow these simple Steps.

## 1.
Put `archivo/` Folder into a Folder called `fonts/`.

## 2.
Put `archivo.css` into your `css/` Folder.

## 3. (Optional)
You may adapt the `url('path')` in `archivo.css` depends on your Website Filesystem.

## 4.
Import `archivo.css` at the top of you main Stylesheet.

```
@import url('archivo.css');
```

## 5.
You are now ready to use the following Rules in your CSS to specify each Font Style:
```
font-family: Archivo-Thin;
font-family: Archivo-ThinItalic;
font-family: Archivo-ExtraLight;
font-family: Archivo-ExtraLightItalic;
font-family: Archivo-Light;
font-family: Archivo-LightItalic;
font-family: Archivo-Regular;
font-family: Archivo-Italic;
font-family: Archivo-Medium;
font-family: Archivo-MediumItalic;
font-family: Archivo-SemiBold;
font-family: Archivo-SemiBoldItalic;
font-family: Archivo-Bold;
font-family: Archivo-BoldItalic;
font-family: Archivo-ExtraBold;
font-family: Archivo-ExtraBoldItalic;
font-family: Archivo-Black;
font-family: Archivo-BlackItalic;
font-family: Archivo-Variable;
font-family: Archivo-VariableItalic;

```
## 6. (Optional)
Use `font-variation-settings` rule to controll axes of variable fonts:
wght 600.0

Available axes:
'wght' (range from 100.0 to 900.0

