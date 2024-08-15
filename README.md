## 可能遇到的问题

不用 vpn 的话，可以用清华大学镜像解决 Cocoapods install 慢的问题

```bash
$ pod repo remove master
$ pod repo add master https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git
$ pod repo update
# OR
$ cd ~/.cocoapods/repos
$ pod repo remove master
$ git clone https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git master
```

如何查看 pod 源

```bash
pod repo list
```
