# Medit

A creative WYSIWYG rich text editor for mobile device by javascript.

һ�������͵��ƶ������������ø��ı��༭����

Demo Adress : [Medit Demo](https://echosoar.github.io/medit/demo/demo.html)

***

### How to use ���ʹ�ã�
	
	// first, import "medit.js" to your html file.
    <script src="../src/medit.js"></script>
	
	// second, initial object,you can use "new medit(DOM Element)" or "medit(DOM Element)".
	var meditObject = medit(document.getElementById("meditContainer"));
	
	// if you wanna get content
	meditObject.getContent();
	
	// if you wanna auto save
	meditObject.autoSave("autoSaveId", function(data, timestamp){
		console.log(data, timestamp);
	});
	

***

### Current support Ŀǰ֧��:

***

##### Basic function ��������:

![add left](./src/images/add.png) Add To Left ��ǰ�����������

![delete](./src/images/close.png) Delete ɾ����ǰ��

![ok](./src/images/ok.png) Ok ��ɵ�ǰ��༭

![setting](./src/images/setting.png) Setting ���õ�ǰ����ʽ

![mode](./src/images/mode.png) Mode ѡ��ǰ������

![add right](./src/images/add.png) Add To Right ��ǰ���Ҳ��������

![Add To Next Line](./src/images/br.png) Add To Next Line �������һ��

***

##### Text Edit �ı��༭:

![bold](./src/images/text/bold.png) Bold �Ӵ�

![italic](./src/images/text/italic.png) Italic б��

![underline](./src/images/text/underline.png) Underline �»���

![size](./src/images/text/size.png) Font-size ���ִ�С

+ ![sizebigger](./src/images/text/sizeBigger.png) Enlarge Font-size ��������

+ ![sizeSmaller](./src/images/text/sizeSmaller.png) Narrow Font-size ��С����

![color](./src/images/text/color.png) Color ������ɫ

+ ![black](./src/images/text/colorBlack.png) Black ��ɫ

+ ![red](./src/images/text/colorRed.png) Red ��ɫ

+ ![green](./src/images/text/colorGreen.png) Green ��ɫ

+ ![blue](./src/images/text/colorBlue.png) Blue ��ɫ

+ ![yellow](./src/images/text/colorYellow.png) Yellow ��ɫ

+ ![pink](./src/images/text/colorPink.png) Pink ��ɫ

+ Text selected by gesture �ı�����ѡ��

	[bold](./demo/demo-gesture.gif)





 

