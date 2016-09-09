;(function(obj, undefined){

	
	var meditId = null;

	var container = [];
	
	var isType = function(ele, type){
		if(!ele || !type)return false;
		return {}.toString.call(ele).slice(8, -1).toLowerCase() === type.toLowerCase();
	}
	
	var gevent = function (ele,event,func){
		if(isType(event, "array")){
			event.forEach(function(v){
				gevent(ele, v, func);
			});
		}else{
			if(window.addEventListener){
				ele.addEventListener(event,func,false);
			}else if(window.attachEvent){
				ele.attachEvent("on"+event,func);
			}else{
				ele["on"+event]=func;
			}
		}
	}
	
	var toolBar = (function(){
		
		var temTool = document.createElement("div");
		temTool.setAttribute("id","medit-tool");
		document.body.appendChild(temTool);
		
		var tool = document.getElementById("medit-tool");
		
		var mainButton = ["addLeft","delete","setting","mode","ok","addRight"];
		mainButton.forEach(function(v){
			var temNode = document.createElement("span");
			temNode.setAttribute("class","medit-tool-button medit-tool-"+v);
			temNode.setAttribute("data-meditToolStyle",v);
			temNode.setAttribute("data-meditToolDegree",1);
			tool.appendChild(temNode);
		});
		
		gevent(tool, ["touchstart"], function(e){
			e = e || window.event;
			var target = e.target || e.srcElement;
			
			var type = target.getAttribute("data-meditToolStyle");
			if(!type) return false;
			
			var degree = target.getAttribute("data-meditToolDegree");
			var contain = container[meditId];
			var thisNode = document.getElementById("medit-" + contain.nowNodeId + "-" + meditId);
			if(degree == 1) {
				switch(type){
					case 'delete':
						contain.node.removeChild(thisNode);
						toolBarHidden();
						break;
					case 'ok':
						thisNode.setAttribute("contentEditable","false");
						thisNode.setAttribute("class","");
						if(thisNode.innerHTML=="") contain.node.removeChild(thisNode);;
						toolBarHidden();
						break;
				}
			}
			if(!contain.node.children.length) contain.node.innerHTML = contain.preHTML;
			console.log(degree);
		});
		
		return tool;
		
	})();
	
	var toolBarDisplay = function() {
		toolBar.style.display = "block";
	}
	
	var toolBarHidden = function() {
		toolBar.style.display = "none";
	}
	
	var medit = function(node) {
		if(!(this instanceof medit)) return new medit(node);
		
		if(!node || node.nodeType != 1)return false;
		
		this.node = node;
		this.nodeCount = 0; // 容器所有子元素数目
		this.nowNodeId = 0;	// 容器当前子元素ID
		
		this.node.setAttribute("data-meditId",container.length);
		
		container.push(this);
		
		gevent(this.node, ["touchstart"], this.editContainFocus);
		gevent(this.node, ["keydown", "keyup"], console.log);
	}
	
	medit.prototype.createSpan = function(nodeId){
		var span =document.createElement("span");
		span.setAttribute("data-medit","true");
		span.setAttribute("id","medit-" + nodeId + "-" + meditId );
		span.setAttribute("contentEditable","true");
		span.setAttribute("class","medit-editing");
		this.node.appendChild(span);
	}
	
	medit.prototype.editContainFocus = function(e) {
	
		toolBarDisplay();
		
		e = e || window.event;
		var target = e.target || e.srcElement;
		
		var type = target.getAttribute("data-medit");
		
		if(!type){ // target is container
			while(!target.getAttribute("data-meditId")){
				target = target.parentNode;
			}
			meditId = target.getAttribute("data-meditId"); // 全局存贮当前medit容器ID
			var meditObj = container[ meditId];
			
			var child = target.children;
			if(!child.length){ // 如果点击了容器发现没有结点，那么就保存原有内容，并且创建新的span
				meditObj.preHTML = target.innerHTML;
				target.innerHTML = "";
				meditObj.createSpan(0);
			}
			
			
		}
		
	}
	
	obj.Medit = obj.medit = medit;
	
})(this);