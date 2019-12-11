(function() {
	var a = {
		container: $("body"),
		toastType: {
			text: "text",
			warn: "warn",
			ok: "ok"
		},
		toast: function(h, c) {
			if(!c) {
				c = a.toastType.text
			}
			var g = $("#toast-" + c),
				e;
			if(g.length > 0) {
				e = true
			}
			if(!e) {
				var d = c == a.toastType.text;
				var f = c == a.toastType.warn ? "weui_icon_toast_warn weui_icon_warn" : "weui_icon_toast";
				var b = '<div id="toast-' + c + '">';
				b += '<div class="weui_mask_transparent weui_noevent"></div>';
				b += '	<div class="weui_toast ' + (d ? "weui_toast_text_only" : "") + '">';
				if(!d) {
					b += '    <i class="' + f + '"></i>'
				}
				b += '    <p class="weui_toast_content ' + (d ? "weui_toast_text" : "") + '">' + (h ? h : "已完成") + "</p>";
				b += "	</div>";
				b += "</div>";
				var g = $(b);
				a.container.append(g.fadeIn())
			} else {
				g.find(".weui_toast_content").text(h ? h : "已完成");
				g.fadeIn()
			}
			setTimeout(function() {
				g.fadeOut()
			}, 2000)
		},
		loadingToast: function(e) {
			var d = $("#loadingToast"),
				c;
			if(e === false) {
				d.fadeOut();
				return
			}
			if(d.length > 0) {
				c = true
			}
			if(!c) {
				var b = '<div id="loadingToast" class="weui_loading_toast">';
				b += '<div class="weui_mask_transparent"></div>';
				b += '<div class="weui_toast">';
				b += '    <div class="weui_loading">';
				b += '        <div class="weui_loading_leaf weui_loading_leaf_0"></div>';
				b += '        <div class="weui_loading_leaf weui_loading_leaf_1"></div>';
				b += '        <div class="weui_loading_leaf weui_loading_leaf_2"></div>';
				b += '        <div class="weui_loading_leaf weui_loading_leaf_4"></div>';
				b += '        <div class="weui_loading_leaf weui_loading_leaf_3"></div>';
				b += '        <div class="weui_loading_leaf weui_loading_leaf_5"></div>';
				b += '        <div class="weui_loading_leaf weui_loading_leaf_6"></div>';
				b += '        <div class="weui_loading_leaf weui_loading_leaf_7"></div>';
				b += '        <div class="weui_loading_leaf weui_loading_leaf_8"></div>';
				b += '        <div class="weui_loading_leaf weui_loading_leaf_9"></div>';
				b += '        <div class="weui_loading_leaf weui_loading_leaf_10"></div>';
				b += '        <div class="weui_loading_leaf weui_loading_leaf_11"></div>';
				b += "    </div>";
				b += '    <p class="weui_toast_content">' + (e ? e : "数据加载中") + "</p>";
				b += "</div>";
				b += "</div>";
				d = $(b);
				a.container.append(d.fadeIn())
			} else {
				d.find(".weui_toast_content").text(e ? e : "数据加载中");
				d.fadeIn()
			}
		},
		actionSheet: function(f, e) {
			var c = '<div id="actionSheet_wrap">';
			c += '<div class="weui_mask_transition" id="weui_mask"></div>';
			c += '<div class="weui_actionsheet" id="weui_actionsheet">';
			c += '	   <div class="actionsheet_cancel iconfont icon-guanbi" id="actionsheet_cancel"></div>';
			c += '	   <div class="weui_actionsheet_menu weui_actionsheet_content" id="weui_actionsheet_content">';
			c += "    </div>";
			c += '    <div class="weui_actionsheet_action">';
			c += '        <div class="weui_actionsheet_cell actionsheet_sure" id="actionsheet_sure">' + (e && e.sure ? e.sure : "确定") + "</div>";
			c += "    </div>";
			c += "</div>";
			c += "</div>";
			a.container.append(c);
			$("#weui_actionsheet_content").html(e && e.contentHtml ? e.contentHtml : "无内容");
			var b = $("#weui_mask");
			var g = $("#weui_actionsheet");
			g.addClass("weui_actionsheet_toggle");
			b.show().addClass("weui_fade_toggle").one("click", function() {
				d(g, b)
			});
			$("#actionsheet_cancel").one("click", function() {
				d(g, b)
			});
			$("#actionsheet_sure").on("click", function() {
				e && e.sureTodo && typeof e.sureTodo === "function" && e.sureTodo($("#actionsheet_cancel"))
			});
			g.unbind("transitionend").unbind("webkitTransitionEnd");
			f && f.hide();

			function d(i, h) {
				f && f.show();
				i.removeClass("weui_actionsheet_toggle");
				h.removeClass("weui_fade_toggle");
				i.on("transitionend", function() {
					h.hide();
					$("#actionSheet_wrap").remove()
				}).on("webkitTransitionEnd", function() {
					h.hide();
					$("#actionSheet_wrap").remove()
				})
			}
		},
		dialog: function(i, f, h, e) {
			var d = "",
				c;
			if(e) {
				c = true
			}
			if(c) {
				d += '<div class="weui_dialog_confirm" style="display: none;">';
				d += '    <div class="weui_mask"></div>';
				d += '    <div class="weui_dialog">';
				d += '        <div class="weui_dialog_hd"><strong class="weui_dialog_title">' + i + "</strong></div>";
				d += '        <div class="weui_dialog_bd">' + f + "</div>";
				d += '        <div class="weui_dialog_ft">';
				d += '            <a href="javascript:;" class="weui_btn_dialog default">取消</a>';
				d += '            <a href="javascript:;" class="weui_btn_dialog primary">确定</a>';
				d += "        </div>";
				d += "    </div>";
				d += "</div>"
			} else {
				d += '<div class="weui_dialog_alert" style="display: none;">';
				d += '    <div class="weui_mask"></div>';
				d += '    <div class="weui_dialog">';
				d += '        <div class="weui_dialog_hd"><strong class="weui_dialog_title">' + i + "</strong></div>";
				d += '        <div class="weui_dialog_bd">' + f + "</div>";
				d += '        <div class="weui_dialog_ft">';
				d += '            <a href="javascript:;" class="weui_btn_dialog primary">确定</a>';
				d += "        </div>";
				d += "    </div>";
				d += "</div>"
			}
			a.container.append(d);
			if(c) {
				var b = a.container.find(".weui_dialog_confirm").show();
				b.find(".default").click(function() {
					if(!e || !e()) {
						b.remove()
					}
				});
				b.find(".primary").click(function() {
					if(!h || !h()) {
						b.remove()
					}
				})
			} else {
				var g = a.container.find(".weui_dialog_alert").show();
				g.find(".primary").click(function() {
					if(!h || !h()) {
						g.remove()
					}
				})
			}
		},
		inputDialog: function(g, d, f, c) {
			var h = $(".input-dialog-wrap");
			var e = false;
			if(h.length == 0) {
				var b = '<div class="input-dialog-wrap">';
				b += '<div id="input-dialog-bg" class="weui_mask_transition weui_fade_toggle"></div>';
				b += '<div class="input-dialog">';
				b += '   <h3 class="title">' + (g ? g : "请输入...") + "</h3>";
				b += '   <div class="content">';
				b += d;
				b += "   </div>";
				b += '   <div class="btm-btn">';
				b += '    <input type="button" value="确 认" class="true-btn">';
				b += '    <input type="button" value="取 消" class="false-btn">';
				b += "   </div>";
				b += "</div>";
				b += "</div>";
				a.container.append(b);
				h = $(".input-dialog-wrap");
				e = true
			}
			e || h.find(".title").text(g ? g : "请输入...");
			e || h.find(".content").html(d);
			h.find("#input-dialog-bg").click(function() {
				h.remove()
			}).show();
			h.find(".true-btn").click(function() {
				if(!f || !f()) {
					h.remove()
				}
			});
			h.find(".false-btn").click(function() {
				if(!c || !c()) {
					h.remove()
				}
			})
		}
	};
	window.WEUI = a
})();