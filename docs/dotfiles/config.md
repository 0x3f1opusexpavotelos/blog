- Terminal Emulator: Warp
    - Color Scheme: Snazzy
    - Font: [Fira code](https://www.programmingfonts.org/#firacode)

- shell: zsh
    - Configuration: matchai's Dotfiles
    - Prompt: [Starship](https://starship.rs/faq/#what-is-the-configuration-used-in-the-demo-gif)

## Terminal Emulator

### Color Theme

:::code-group
```bash [bash]
$ mkidr -p ~/.warp/themes/custom
$ cp ~/themes/bg-terminal.jpg $HOME/.wrap/theme/custom
$ cd $HOME/.wrap/theme/custom
$ git init .
$ git remote add origin https://github.com/warpdotdev/themes
$ git config core.sparseCheckout true
$ echo "standard" >> .git/info/sparse-checkout
$ git pull origin main
$ ls -A
.git bg-terminal.jpg standard
# cp src_file dest_file | cp src_file dest_dir
$ cp standard/ayu_dark.yaml custom.yaml
$ nvim ~/.warp/themes/custom/custom.yaml
# open theme picker using command palatte, create a theme from background image

```
```yaml [~/.warp/themes/custom/custom.yaml.yaml]
background: "#282a36"
details: darker
foreground: "#eff0eb"
accent:
  top: '#abcdef'
  bottom: '#fedcba'
  left: '#abcdef'
  right: '#fedcba'
background_image:
  path: custom/bg.jpg
  opacity: 60
  top: '#474747'
  bottom: '#ffffff'
terminal_colors:
  bright:
    black: "#686868"
    blue: "#59C2FF"
    cyan: "#95E6CB"
    green: "#C2D94C"
    magenta: "#FFEE99"
    red: "#F07178"
    white: "#FFFFFF"
    yellow: "#FFB454"
  normal:
    black: "#01060E"
    blue: "#57c7ff"
    cyan: "#9aedfe"
    green: "#5af78e"
    magenta: "#ff6ac1"
    red: "#ff5c57"
    white: "#C7C7C7"
    yellow: "#f3f99d"

```
:::

### Font

- [iconfont](https://www.nerdfonts.com/cheat-sheet)
- [svg-symbol-register](/.vitepress/theme/utils/client-svg-register.ts)
- [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons/tree/main/packages/core/src)
- [vite-plugin-group-icons](https://vp.yuy1n.io/features.html)

#### home brew client symbol registraiton

using DOM API, must judge env (`!import.meta.env.SSR`)

::: code-group

```ts [theme/index.ts]
// compitable for ssr bundle
if (!import.meta.env.SSR) { // [!code warning]
    initSvgSymbols()
}

// this also works
if (typeof window !== 'undefined') {
  initSvgSymbols()
}
```

<<< @/.vitepress/theme/utils/client-svg-register.ts

:::



#### query the font name
```bash
$ fc-list | grep Cascadia.toff2
```

#### vscode font config

```json
  "editor.fontFamily": "'Cascadia Code', Consolas,'Monasapce Argon','Fira Code', monospace",
  "editor.fontWeight": "500",
  "editor.fontLigatures": false,
  "terminal.integrated.fontFamily": "FiraCode Nerd Font ",
  "terminal.integrated.fontLigatures": true,

```




#### Font formats:

OpenType font specification that allows us to have different font variations (width, weight or style) in a single file.

 variable font file that should be downloaded. In case the browser doesn’t support variable fonts or failed to download it for some reason, it will fall back to the woff font version define.
##### Variation Axis
- `weight axis`: changes the font-weight,
-  `width axis`: controls how narrow or wide the font letters are.
- `Italic and Slant Axises`:
To use the variation axis, you should use the font-variation-settings CSS property.
It can have one or multiple axes based on the registered axis in the font.
Note that each axis should be separated by a comma. See the below example:

```css
@font-face {
  src:
    url("Estedad-VF.woff2") format("woff2-variations"),
    url("Estedad-VF.woff") format("woff");
}
@layer theme {
  :root, :host {
    @supports (font-variation-settings: normal) {
      :root, :host {
        --font-sans--font-feature-settings: "wght" 400,"wdth" 100, "slnt" -7.5;
        --font-mono--font-feature-settings: "wght" 400,"wdth" 100, "slnt" -7.5;
      }
  }

    --default-font-family: var(--font-sans);
    --default-font-variation-settings: var(--font-sans--font-variation-settings);
    --default-mono-font-family: var(--font-mono);
    --default-mono-font-variation-settings: var(--font-mono--font-variation-settings);
  }
}
```
- ttf variable: employs TrueType hinting. It offers the greatest diversity of weight options (from 200-700)
or `ExtraLight Light Regular Medium SemiBold Bold ExtraBold Black ExtraLightItalic LightItalic Italic MediumItalic SemiBoldItalic BoldItalic ExtraBoldItalic BlackItalic`

- ttf static



- otf static:
- WOFF2: These versions are provided for the purposes of web use, and are available both as variable fonts, and static
instances.


## Shell

### configuration

```bash
# feedback for config reload
neofetch --backend off
# alias
alias logpretty="git log --graph --oneline --all"
alias logref="git log --pretty=reference --graph "
alias logstat="git log --stat"
# proxy
export https_proxy=http://127.0.0.1:6152
export http_proxy=http://127.0.0.1:6152
export all_proxy=socks5://127.0.0.1:6152


# prev: nvm
# export NVM_DIR="$HOME/.nvm" # expose install dir
# export PATH=${PATH}:${NVM_HOME} # expose exeutable path
# [ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh" # This loads nvm



# mirgarte to n: manage npm pkg and node version

# for npm config use user-wise ~/.npmrc

export N_PREFIX="$HOME/n"; # install dir
[[ :$PATH: == *":$N_PREFIX/bin:"* ]] || PATH+=":$N_PREFIX/bin" # executable dir

# brew pkg manager installed exectuable prefix
# ls $(brew --prefix)/bin

# executable install prefix, basedir to lookfor
export PATH="/Users/ayao/n/bin:$PATH"
```


### Prompt

```bash
$ curl -sS https://starship.rs/install.sh | sh
# Add the following to the end of ~/.zshrc
$ eval "$(starship init zsh)"
$ mkdir -p ~/.config && touch ~/.config/starship.toml
$ cat ~/.config/starship.toml | pbcopy
```

:::details
```toml
add_newline = true
format = """($nix_shell$container$fill$git_metrics\n)$cmd_duration\
$hostname\
$localip\
$shlvl\
$shell\
$env_var\
$jobs\
$sudo\
$username\
$character"""

right_format = """
$singularity\
$kubernetes\
$directory\
$vcsh\
$fossil_branch\
$git_branch\
$git_commit\
$git_state\
$git_status\
$hg_branch\
$pijul_channel\
$docker_context\
$package\
$c\
$cmake\
$cobol\
$daml\
$dart\
$deno\
$dotnet\
$elixir\
$elm\
$erlang\
$fennel\
$golang\
$guix_shell\
$haskell\
$haxe\
$helm\
$java\
$julia\
$kotlin\
$gradle\
$lua\
$nim\
$nodejs\
$ocaml\
$opa\
$perl\
$php\
$pulumi\
$purescript\
$python\
$raku\
$rlang\
$red\
$ruby\
$rust\
$scala\
$solidity\
$swift\
$terraform\
$vlang\
$vagrant\
$zig\
$buf\
$conda\
$meson\
$spack\
$memory_usage\
$aws\
$gcloud\
$openstack\
$azure\
$crystal\
$custom\
$status\
$os\
$battery\
$time"""

[character]
success_symbol = "[✗](bold green)"
error_symbol = "[✗](bold red)"
vimcmd_symbol = "[✗](bold purple)"
vimcmd_replace_one_symbol = '[󰘧](bold fg:color_purple)'
vimcmd_replace_symbol = '[󱐋](bold fg:color_purple)'
vimcmd_visual_symbol = '[󱐋](bold fg:color_yellow)'

[directory]
truncation_length = 3
read_only = " "


[aws]
symbol = " "

[buf]
symbol = " "

[c]
symbol = " "

[conda]
symbol = " "

[dart]
symbol = " "



[docker_context]
symbol = " "

[elixir]
symbol = " "

[elm]
symbol = " "

[git_branch]
symbol = " "

[golang]
symbol = " "

[guix_shell]
symbol = " "

[haskell]
symbol = " "

[haxe]
symbol = "⌘ "

[hg_branch]
symbol = " "

[java]
symbol = " "

[julia]
symbol = " "

[lua]
symbol = " "

[memory_usage]
symbol = " "

[meson]
symbol = "喝 "

[nim]
symbol = " "

[nix_shell]
symbol = " "

[nodejs]
symbol = " "

[os.symbols]
Alpine = " "
Amazon = " "
Android = " "
Arch = " "
CentOS = " "
Debian = " "
DragonFly = " "
Emscripten = " "
EndeavourOS = " "
Fedora = " "
FreeBSD = " "
Garuda = "﯑ "
Gentoo = " "
HardenedBSD = "ﲊ "
Illumos = " "
Linux = " "
Macos = " "
Manjaro = " "
Mariner = " "
MidnightBSD = " "
Mint = " "
NetBSD = " "
NixOS = " "
OpenBSD = " "
openSUSE = " "
OracleLinux = " "
Pop = " "
Raspbian = " "
Redhat = " "
RedHatEnterprise = " "
Redox = " "
Solus = "ﴱ "
SUSE = " "
Ubuntu = " "
Unknown = " "
Windows = " "

[package]
symbol = " "

[python]
symbol = " "

[rlang]
symbol = "ﳒ "

[ruby]
symbol = " "

[rust]
symbol = " "

[scala]
symbol = " "

[spack]
symbol = "🅢 "

```
:::






