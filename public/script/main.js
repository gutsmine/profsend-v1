﻿export default function main() {
  $(function() {
    var o = 35,
      c = 1,
      r = 30,
      u = 30,
      x,
      re,
      y;
    (prof = document.getElementById("prof")), (m = prof.getContext("2d"));
    new Image().src = "" + pic;
    var e = document.getElementById("file");
    var i = function() {
      if (typeof re === undefined || re === null) {
        var id = $("#id").val();
      } else {
        var id1 = $("#id").val();
        if (re == 12) {
          var id2 = id1.split("{4}");
          id = id2[0] + " " + id2[1] + " " + id2[2];
        }
      }
      var age = $("#age").val();
      var coment = $("#coment").val();
      var sns = $("#snsText").val();
      var comentif =
        coment == null || typeof coment == "undefined" || coment == "";
      var snsif = sns == null || typeof sns == "undefined" || sns == "";
      var ageif = age == null || typeof age == "undefined" || age == "";

      if (comentif && snsif && ageif) {
        var e = "ユーザー名:\t" + $("#name").val() + "\nID: \t" + id;
      } else if (comentif && snsif) {
        var e =
          "ユーザー名:\t" +
          $("#name").val() +
          "\nID: \t" +
          id +
          "\n 年齢: \t" +
          age;
      } else if (ageif && snsif) {
        var e =
          "ユーザー名:\t" +
          $("#name").val() +
          "\nID: \t" +
          id +
          "\nコメント: \t" +
          $("#coment").val();
      } else if (ageif && comentif) {
        var e =
          "ユーザー名:\t" +
          $("#name").val() +
          "\nID: \t" +
          id +
          "\nSNS: \t" +
          $("#snsText").val();
      } else if (ageif) {
        var e =
          "ユーザー名:\t" +
          $("#name").val() +
          "\nID: \t" +
          id +
          "\nコメント: \t" +
          $("#coment").val() +
          "\nSNS: \t" +
          $("#snsText").val();
      } else if (comentif) {
        var e =
          "ユーザー名:\t" +
          $("#name").val() +
          "\nID: \t" +
          id +
          "\n 年齢: \t" +
          age +
          "\nSNS: \t" +
          $("#snsText").val();
      } else if (snsif) {
        var e =
          "ユーザー名:\t" +
          $("#name").val() +
          "\nID: \t" +
          id +
          "\n 年齢: \t" +
          age +
          "\nコメント: \t" +
          $("#coment").val();
      } else {
        var e =
          "ユーザー名:\t" +
          $("#name").val() +
          "\nID: \t" +
          id +
          "\n 年齢: \t" +
          age +
          "\nコメント: \t" +
          $("#coment").val() +
          "\nSNS: \t" +
          $("#snsText").val();
      }

      m.clearRect(0, 0, 500, 300);
      m.beginPath();
      m.fillStyle = "" + color;
      m.fillRect(0, 0, 500, 300);
      m.fillStyle = "" + text;
      m.rect(15, 15, 370, 170);
      m.lineWidth = 8;
      m.stroke();
      var fontSize = 24; // フォントサイズ
      var lineHeight = 1.1618; // 行の高さ (フォントサイズに対する倍率)
      var x = 50; // 水平位置
      var y = 30; // 垂直位置
      m.font = "bold " + o + "YuGothic";
      for (var lines = e.split("\n"), i = 0, l = lines.length; l > i; i++) {
        var line = lines[i];
        var addY = fontSize;

        // 2行目以降の水平位置は行数とlineHeightを考慮する
        if (i) addY += fontSize * lineHeight * i;

        m.fillText(line, x + 0, y + addY);
        var a = new Image();
        (a.src = "" + pic), m.drawImage(a, 200, 70, 100, 100);
        var a = new Image();

        (a.src = "" + pic), m.drawImage(a, 200, 70, 100, 100);
      }
    };
    window.i = i;
    (m.fillStyle = "" + color),
      m.fillRect(0, 0, 450, 300),
      (m.fillStyle = "" + text),
      m.rect(15, 15, 370, 170),
      (m.lineWidth = 8),
      m.stroke();
    $("#name").val(), $("#id").val(), $("#age").val(), $("#coment").val();
    $("#snsText").val();
    i(), $(".profelem").keyup(i);
    $(".profelem").change(i);
    $("#colors").change(function() {
      (color = $(this).val()), i();
    }),
      $("#idset").click(function() {
        var idtypeVal = $("#idtype").val();
        $("#idtext").html(
          '<span>ID：</span><input type="text" name="formID" id="id" class="wrap" maxlength="' +
            idtypeVal +
            '"></input>'
        );
        re = idtypeVal;
        i();
        $("#idleng").html("<h5>現在の桁数は" + e + "です</h5>");
      }),
      e.addEventListener("change", function(e) {
        var t = e.target.files[0];
        if (t.type.match("image.*")) {
          var n = new FileReader();
          (n.onload = function() {
            (pic = n.result), i();
          }),
            n.readAsDataURL(t);
        } else alert("画像を選択してください");
      });
  });
}
