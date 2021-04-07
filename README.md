<h1>emulatorjs-chrome-extension</h1>
An emulator for nes, snes, gb, gba and many more that works in a chrome extension! - No web server required!
<br><br>
<p>adapted from <a href=https://github.com/ethanaobrien/emulatorjs>https://github.com/ethanaobrien/emulatorjs</a> and converted to a chrome extension (I own the base repository)</p>
<br>
<h2>How To</h2>

(It's easy once you get used to it)

First, make a copy of this repository (Make it private if you want) or download it. do not change any of the files!

You can specify the icon in `manifest.json`.

make a file named index.html and place it in `/html/`, use the code example below to add your game to the extension.

You supply your own rom. This is an emulator, which is 100% legal. What isn't legal is the rom.

Place the rom in `/html/` and in the code example where it says 'Url to Game rom' put the rom file name (plus file extension) in between the `''`

Once you have everything set up you MUST 1st, launch the extension. 2nd, right click and select inspect and go to the console. 3rd, it will say "failed to excecute because of the content policy" and it will then say the content policy, after the content policy is listed it will say something like `Either the 'unsafe-inline' keyword, a hash ('sha256-...'), or a nonce ('nonce-...') is required to enable inline execution.` Copy the hash it gives you (it will always start with `sha256-`) (If it says `sha256-...` than ignore it). Paste it in the `manifest.json` in the `content_security_policy` section after the other hashes (sepperate them with a space!). This will allow the javascript to run. This is different for every rom and IT WILL NOT WORK UNLESS YOU DO THIS!!

<p>For more systems, please go <a href=https://github.com/ethanaobrien/emulatorjs>here</a>, and follow the instructions in the readme. I own both repositories.</p>

<h1>Supported systems!</h1>
<h2>NES / Famicom</h2>

Code example

```
<div style="width:640px;height:480px;max-width:100%">
  <div id="game"></div>
</div>
<script type="text/javascript">
    EJS_player = '#game';
    EJS_biosUrl = ''; // Url to Famicom Disk System bios
    EJS_gameUrl = ''; // Url to Game rom
    EJS_core = 'nes';
    EJS_lightgun = false; // Lightgun
</script>
<script src="loader.js"></script>
```
Your rom MUST have one of the following extensions

```
.fds
.nes
.unif
.unf
```
You can find the famicon BIOS by looking up the md5 sum which is `ca30b50f880eb660a320674ed365ef7a`
<br><br>
<h2>SNES</h2>

Code Example

```
<div style="width:640px;height:480px;max-width:100%">
        <div id="game"></div>
      </div>
<script type="text/javascript">
    EJS_player = '#game';
    EJS_gameUrl = ''; // Url to Game rom
    EJS_core = 'snes';
    EJS_mouse = false; // SNES Mouse
    EJS_multitap = false; // SNES Multitap
</script>
<script src="loader.js"></script>
```
Your rom MUST have one of the following extensions

```
.smc
.fig
.sfc
.gd3
.gd7
.dx2
.bsx
.swc
```
There is no bios for this system
<br><br>
<h2>Nintendo 64</h2>

Code Example

```
<div style="width:640px;height:480px;max-width:100%">
        <div id="game"></div>
      </div>
<script type="text/javascript">
    EJS_player = '#game';
    EJS_gameUrl = ''; // Url to Game rom
    EJS_core = 'n64';
</script>
<script src="loader.js"></script>
```
I do not know the file extension limits for this system. I know the `.z64` roms work.

There is no bios for this system
<br><br>
<h2>Nintendo Game Boy</h2>

Code example

```
<div style="width:640px;height:480px;max-width:100%">
        <div id="game"></div>
      </div>
<script type="text/javascript">
    EJS_player = '#game';
    EJS_biosUrl = '';
    EJS_gameUrl = ''; // Url to Game rom
    EJS_core = 'gb';
</script>
<script src="loader.js"></script>
```

I do not know the file extension limits for this system.

You can find the Game Boy BIOS by looking up the md5 sum which is `32fbbd84168d3482956eb3c5051637f5`
You can find the Game Boy Color BIOS by looking up the md5 sum which is `dbfce9db9deaa2567f6a84fde55f9680`
<br><br>
<h2>Nintendo Game Boy Advance</h2>

Code example

```
<div style="width:640px;height:480px;max-width:100%">
        <div id="game"></div>
      </div>
<script type="text/javascript">
    EJS_player = '#game';
    EJS_biosUrl = '';
    EJS_gameUrl = ''; // Url to Game rom
    EJS_core = 'gba';
</script>
<script src="loader.js"></script>
```

I do not know the file extension limits for this system.

You can find the Game Boy Advance BIOS by looking up the md5 sum which is `	a860e8c0b6d573d191e4ec7db1b1e4f6`
You can find the Game Boy BIOS by looking up the md5 sum which is `	32fbbd84168d3482956eb3c5051637f5`
You can find the Game Boy Color BIOS by looking up the md5 sum which is `dbfce9db9deaa2567f6a84fde55f9680`
You can find the Super Game Boy BIOS by looking up the md5 sum which is `d574d4f9c12f305074798f54c091a8b4`
<br><br>
<h2>Nintendo DS</h2>

Code example

```
<div style="width:640px;height:480px;max-width:100%">
        <div id="game"></div>
      </div>
<script type="text/javascript">
    EJS_player = '#game';
    EJS_gameUrl = ''; // Url to Game rom
    EJS_core = 'nds';
</script>
<script src="loader.js"></script>
```

I do not know the file extension limits for this system.

There is no bios for this system
<br><br>
<h2>PlayStation</h2>

Code example

```
<div style="width:640px;height:480px;max-width:100%">
        <div id="game"></div>
      </div>
<script type="text/javascript">
    EJS_player = '#game';
    EJS_biosUrl = ''; // Url to Bios file
    EJS_gameUrl = ''; // Url to Game rom
    EJS_core = 'psx';
</script>
<script src="loader.js"></script>
```
Your rom MUST have one of the following extensions

```
.bin
.cue
.img
.mdf
.pbp
.toc
.cbn
.m3u
.ccd
```
You can find the PlayStation 1 JP BIOS by looking up the md5 sum which is `8dd7d5296a650fac7319bce665a6a53c`
You can find the PlayStation 1 US BIOS by looking up the md5 sum which is `490f666e1afb15b7362b406ed1cea246`
You can find the PlayStation 1 EU BIOS by looking up the md5 sum which is `32736f17079d0b2b7024407c39bd3050`
<br><br>
<h2>Virtual Boy</h2>

Code example

```
<div style="width:640px;height:480px;max-width:100%">
        <div id="game"></div>
      </div>
<script type="text/javascript">
    EJS_player = '#game';
    EJS_gameUrl = ''; // Url to Game rom
    EJS_core = 'vb';
</script>
<script src="loader.js"></script>
```

I do not know the file extension limits for this system.

There is no bios for this system
