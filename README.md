# lmf 8位继电器版,1wire测温
更新clone下来的代码 git pull，视频要手动

# lmf
要装的程序


$ sudo apt-get update

$ sudo apt-get install feh ttf-wqy-zenhei samba-common-bin samba python3-rpi.gpio python3-w1thermsensor
$ sudo pip3 install pexpect aiohttp aiohttp_jinja2

禁用屏保和休眠
$ sudo leafpad /etc/lightdm/lightdm.conf 行xserver-command=X -s o -dpms

samba文件共享
$ sudo leafpad /etc/samba/smb.conf  [homes]段
browseable = yes

read only = no
create mask = 0755
directory mask = 0755

增加samba用户
sudo smbpasswd -a pi 输入两次密码，重启

开机运行Python脚本
sudo pcmanfm 复制desktop文件到 /home/pi/.config/autostart

设定有线固定IP，设置中文，设置时区，设置背景,关闭设置里接口，开启1-wire

HDMI输出声音
$ sudo leafpad /boot/config.txt 里面设置HDMI_DRIVER=2,参数是：-o hdmi
/boot/config.txt添加下面 
dtoverlay=w1-gpio-pullup,gpiopin=4






image 和 imagetmb 增加图片 
image 900*810 
imagetmb 220*220


文件名：A_B_C_D_E.jpg
A 类别 ; B 排序,大图文件名; 
C时间（秒）; D 视频文件名（视频要mp4结尾）; 
E urlencode后的中文菜名 .jpg(或png，要统一)



setting.txt : 
time1
time2up
time3dw
time4




    #file_object=open('p:/fse.txt','r')    # r只读，w可写，a追加
    #for line in file_object:
         #print(line)
    #file_object.close()




chromium

sudo leafpad /etc/apt/sources.list

复制add以下地址

deb http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ wheezy main contrib non-free rpi 
deb-src http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ wheezy main contrib non-free rpi 
deb http://mirrors.neusoft.edu.cn/raspbian/raspbian/ wheezy main contrib non-free rpi 
deb-src http://mirrors.neusoft.edu.cn/raspbian/raspbian/ wheezy main contrib non-free rpi 
deb http://mirrors.ustc.edu.cn/raspbian/raspbian/ wheezy main contrib non-free rpi 
deb-src http://mirrors.ustc.edu.cn/raspbian/raspbian/ wheezy main contrib non-free rpi



sudo apt-get install chromium-browser chromium-l10n

chromium-l10n这是中文语言包
In order to have a better display you can also install MC core fonts using 

sudo apt-get install ttf-mscorefonts-installer




可以直接在图形界面设置固定IP

  设定有线即可
sudo leafpad /etc/network/interfaces


iface eth0 inet static

address 192.168.1.105
netmask 255.255.255.0
gateway 192.168.1.1
