var TaskPage = location.href;

if (-1 === TaskPage.indexOf("raterhub")) {
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.tickytimer.com/domain-authority.php?website=" + TaskPage, iframe.style.width = "100%", iframe.style.height = "400px", document.body.prepend(iframe)
} else if (-1 === TaskPage.indexOf('taskIds')) {
    function TTRefresher() {
        var e = document.createElement("script");
        e.type = "text/javascript", e.src = "https://www.tickytimer.com/node_modules/hacktimer/HackTimer.min.js", $("head").append(e);
        var t = window.location.href;
        $("<iframe />", {
            name: "frame1",
            id: "frame1",
            src: t,
            height: 100
        }).appendTo("body"), $("<div style='margin-left:30px; margin-bomttom:30px'><h1>Task Refresher Is On</h1><label>Automatically Click on Task When Available? </label><input  type='checkbox' id='TTAutoStart'><p>While you wait enjoy a game.</p><select onchange=\"$('#gameTT').attr('src',$('#TTgameselect').val());\" id='TTgameselect'><option value='https://www.tickytimer.com?wall'>No Game</option><option value='https://play2048.co/'>2048</option><option value='https://surviv.io/'>Surviv.IO</option><option value='https://www.solitaire-klondike.com/'>Solitaire</option><option value='https://hole-io.com/'>Hole.IO</option><option value='https://twinfinite.net/category/quiz/'>Game Quizzes</option></select></div>").appendTo("body");
        var o = $("#frame1");
        o.css("width", "100%"), $("<iframe />", {
            name: "gameTT",
            id: "gameTT",
            src: "https://www.tickytimer.com?wall"
        }).appendTo("body");
        var i = $("#gameTT");

        function a() {
            var e = o.contents().find("a.button");
            if (0 < e.length) {
                $("#TTAutoStart").prop("checked") && (location.href = o.contents().find("a.button").eq(0).attr("href"));
                var t = document.createElement("audio");
                t.setAttribute("src", "https://www.tickytimer.com/sounds/sound1.mp3"), t.addEventListener("canplay", function() {
                    this.play()
                }, !1), $(e).each(function() {
                    $(this).parent().parent().appendTo(".container")
                }), setInterval(function() {
                    var e = document.createElement("audio");
                    e.setAttribute("src", "https://www.tickytimer.com/sounds/sound1.mp3"), e.addEventListener("canplay", function() {
                        this.play()
                    }, !1)
                }, 5e3)
            }
        }
        i.css("width", "100%"), i.css("height", "80vh"), setTimeout(function() {
            a()
        }, 1e3), setInterval(function() {
            o.attr("src", t), setTimeout(function() {
                a()
            }, 1e3)
        }, 61e3)
    }
    $(".button").on("click", function(e) {
        var t = $(".button").index(this);
        localStorage.setItem("Index", t)
    }), $.get("https://www.tickytimer.com/taskMapper.php?action=get", function(e, t) {
        var o = JSON.parse(e),
            i = $(".button").length - 1,
            a = 0;
        for (a = 0; a <= i; a++) $("<span>" + o[a] + " </span>").insertAfter($(".button").eq(a))
    }), $('<div style="margin-left:30px; margin-right:30px; margin-top:30px; font-size:15px; background-color:#2196F3; color:#FFFFFF; padding:15px; border-radius:50px;"><b>Task Mapper</b> Info: The button text (SxS and Exp) is based on the length of the url of the task. It can gauge whether a task is EXP or SXS and was provided by Scooter. The text besides the button are the headers of the previous task for that button. Neither are correct 100% of the time, but use both to make the best judgement. Scooters Extensions: <a style="color:#FFFFFF" href="https://chrome.google.com/webstore/detail/lfh/hhmlbldnlgbeckcfngbpjjalecpdmknk" target="_blank">LFH</a> | <a style="color:#FFFFFF"  href="https://chrome.google.com/webstore/detail/rating-examples/jhbidnpflpccdoffamdgpmgilfbpigdh" target="_blank">Rating Examples</a> </div><div style="margin-left:30px; margin-right:30px; margin-top:30px; font-size:15px; background-color:#5cb85c; color:#FFFFFF; padding:15px; border-radius:50px;"><b>Resources</b>: <a style="color:#FFFFFF" target="_blank" href="https://tickytimer.com/chrome-extension.php">TickyTimer Approved Chrome Extension</a> | <a style="color:#FFFFFF" href="javascript:void(0)" onclick="TTRefresher()" >NRT Refresher</a> | <a style="color:#FFFFFF" target="_blank" href="https://tickytimer.com/sxs-guide.php">SxS Tutorial</a>  | <a style="color:#FFFFFF" target="_blank"  href="https://docs.google.com/document/d/1bqakRCOfSbaI__syoF_vk8VVgkhRZTGuEXjdXxQXX8I/edit#heading=h.5fg9s0covp0r">Unofficial Chat Dictionary</a> | <a style="color:#FFFFFF" target="_blank"  href="https://www.tickytimer.com/shortcodes.php">Comment Shortcodes</a> | <a style="color:#FFFFFF" href="https://chat.roguerater.net/channel/general" target="_blank">Rogue Chat</a></div><br><p style="margin-left:30px;"><b>Latest Updates (V5.2)</b></p></div>').appendTo("body");
    javascript: (function() {
        xList = document.getElementsByClassName("ewok-rater-task-option");
        for (i = 0; i < xList.length; i++) {
            childList = xList[i].children;
            for (y = 0; y < childList.length; y++) {
                type = childList[y].firstChild.href.length;
                if (childList[y].firstChild.href.length == 396)
                    type = "SxS 396";
                else if (childList[y].firstChild.href.length == 376)
                    type = "SxS 376";
                else if (childList[y].firstChild.href.length == 420)
                    type = "Exp 420";
                else if (childList[y].firstChild.href.length == 440)
                    type = "Exp 440";
                childList[y].firstChild.text += " (" + type + ")";
            }
        }
    })();
} else {

    function scrollToTask() {
        $("html, body").animate({
            scrollTop: $(".ewok-buds").offset().top
        }, 1e3)
    }
    if (-1 === document.title.indexOf("TickyTimer")) {
        function grapher() {
            if (void 0 !== localStorage.getItem("Index") && null !== localStorage.getItem("Index")) {
                var e = $("h1:eq(0)").text() + " | " + $("h1:eq(1)").text() + " | " + $("h1:eq(2)").text();
                $.post("https://www.tickytimer.com/taskMapper.php", {
                    Index: localStorage.getItem("Index"),
                    Description: e
                })
            }
            localStorage.removeItem("Index")
        }

        function colorMe() {
            $("#ewok-submit-div").css("background-color", $("#TickyTimerColor").val()), localStorage.setItem("color", $("#TickyTimerColor").val())
        }

        function tickyTimerRelease() {
            document.getElementById("ewok-release-button").click(), $("#ewok-release-time").click()
        }

        function precisionRound(e, t) {
            var o = Math.pow(10, t);
            return Math.round(e * o) / o
        }
        var getUrlParameter = function(e) {
            var t, o, i = decodeURIComponent(window.location.search.substring(1)).split("&");
            for (o = 0; o < i.length; o++)
                if ((t = i[o].split("="))[0] === e) return void 0 === t[1] || t[1]
        };

        function middlePoint(e, t, o, i) {
            var a = (i - t).toRad();
            e = e.toRad(), o = o.toRad(), t = t.toRad();
            var n = Math.cos(o) * Math.cos(a),
                s = Math.cos(o) * Math.sin(a),
                r = Math.atan2(Math.sin(e) + Math.sin(o), Math.sqrt((Math.cos(e) + n) * (Math.cos(e) + n) + s * s));
            return [(t + Math.atan2(s, Math.cos(e) + n)).toDeg(), r.toDeg()]
        }

        function openMap() {
            var e = middlePoint(ewokFilteredItemParameters.displayLocation.politicalEntity.bounds.hi[0], ewokFilteredItemParameters.displayLocation.politicalEntity.bounds.hi[1], ewokFilteredItemParameters.displayLocation.politicalEntity.bounds.lo[0], ewokFilteredItemParameters.displayLocation.politicalEntity.bounds.lo[1]),
                t = "https://www.google.com/maps/search/" + $(".ewok-task-query:first").text() + "/@" + e[1] + "," + e[0] + ",13z";
            window.open(t, "_blank")
        }

        function googleIt() {
            var e = "https://www.google.com/search?q=" + $(".ewok-task-query:first").text();
            window.open(e, "_blank")
        }

        function TTGuidelines() {
            var e = "https://www.raterhub.com/resource/fe_files/portal/portal_files/General_Guidelines.pdf"; - 1 !== $("h1:eq(0)").text().indexOf("Side By Side") ? e = "https://raterlabs.appen.com/qrp/core/vendors/document/view/21" : -1 !== $("h1:eq(0)").text().indexOf("Image") ? e = "https://raterlabs.appen.com/qrp/core/vendors/social_file/1065488/ImageGuidelines.pdf" : -1 !== $("h1:eq(0)").text().indexOf("YouTube") ? e = "https://raterlabs.appen.com/qrp/core/vendors/social_file/1065488/YouTubeGuidelines42617.pdf" : -1 !== $("h1:eq(0)").text().indexOf("Maps") && (e = "https://raterlabs.appen.com/qrp/core/vendors/social_file/1065488/mapsgg05152015.pdf"), window.open(e, "_blank")
        }

        function TTFaqs() {
            window.open("https://tickytimer.com/bookmarklet-faqs.php", "_blank")
        }

        function dashIt() {
            window.open("https://www.tickytimer.com/index.php?dash=Y", "_blank")
        }

        function TTChangeSound(e) {
            var t = e.value;
            localStorage.setItem("TTURL", t)
        }

        function TTChangeSoundTracker(e) {
            var t = e.value;
            localStorage.setItem("TTSoundTracker", t)
        }

        function TTChangeSoundException(e) {
            var t = e.value;
            localStorage.setItem("TTSoundException", t)
        }

        function TTGTR() {
            if ($("#TTGTR").prop("checked")) {
                localStorage.setItem("TTGTR", "1");
            } else {
                localStorage.setItem("TTGTR", "0");

            }
        }

        function TTTab() {
            if ($("#TTTab").prop("checked")) {
                localStorage.setItem("TTTab", "1");
            } else {
                localStorage.setItem("TTTab", "0");

            }
        }

        function TTToggle() {
            0 == $(".tickylinks").length ? alert("Sorry no Ticky Timer Links were found (Open in Browser, Page Quality Assistant, or Watch Video)") : $(".tickylinks").eq(0).hasClass("TTnosee") ? $(".tickylinks,.divider").removeClass("TTnosee") : $(".tickylinks,.divider").addClass("TTnosee")
        }

        function TTgetColor(e) {
            return ["hsl(", (120 * (1 - e)).toString(10), ",100%,35%)"].join("")
        }

        function TTRacy(e, t) {
            $(".ewok-buds-result-question").find('input[name$="IsRacy"]:eq(' + e + ")").click(), 2 == e ? $('input[name="SexualSeeking"]:eq(1)').click() : $('input[name="SexualSeeking"]:eq(0)').click(), $("html, body").animate({
                scrollTop: $(".ewok-buds-sides-container").offset().top
            }, 1e3)
        }

        function TTDS1(elem) {
            if ($('#TTDS1').prop('checked')) {
                localStorage.setItem("TTDS1", "1");
            } else {
                localStorage.setItem("TTDS1", "0");
            }
        }

        function TTYT(e) {
            $(".container").append('<div id="TTmodal2" class="modal"><div class="TTmodal-content2"><span  class="TTclose2">&times;</span><div id="TTYoutubeWatch"></div></div></div></div>'), $(".TTclose2").on("click", function(e) {
                $("#TTmodal2").remove(), $(".container").append('<div id="TTmodal2" class="modal"><div class="TTmodal-content2"><span  class="TTclose2">&times;</span><div id="TTYoutubeWatch"></div></div></div></div>'), TTYTClose()
            }), $("#TTmodal2").css("display", "block"), $("#TTYoutubeWatch").html("<iframe style='width:100%; height:800px' src='https://www.tickytimer.com/youtube.php?v=" + e + "&bookmarklet'></iframe>")
        }

        function TTYTClose() {
            $(".TTclose2").on("click", function(e) {
                $("#TTmodal2").remove(), $(".container").append('<div id="TTmodal2" class="modal"><div class="TTmodal-content2"><span  class="TTclose2">&times;</span><div id="TTYoutubeWatch"></div></div></div></div>')
            })
        }

        function TTSearchQueryOnYoutube() {
            var url = 'https://www.youtube.com/results?search_query=' + $(".ewok-task-query:first").text();
            window.open(url, '_blank');
        }

        function TTGetScrollP() {
            var num = $('#TTScrollAmt').val();
            num = parseInt(num);
            num = num / 100;
            return num;
        }

        function TTgoUp() {
            var percent = TTGetScrollP();
            var height = ($(window).height() * percent) - window.scrollY;
            $([document.documentElement, document.body]).animate({
                scrollTop: height * -1
            }, 1000);

        }

        function TTgoDown() {
            var percent = TTGetScrollP();
            var height = ($(window).height() * percent) + window.scrollY;
            $([document.documentElement, document.body]).animate({
                scrollTop: height
            }, 1000);
        }

        $(document).on('change', '.file-to-import', function(event) {
            var reader = new FileReader();

            reader.onload = function(event) {
                var jsonObj = event.target.result;
                localStorage.setItem('TTShorties', jsonObj);
                window.TTshorties = JSON.parse(localStorage.getItem('TTShorties'));

            }
            reader.readAsText(event.target.files[0]);

        });

        document.onkeydown = function(event) {
            switch (event.keyCode) {

                case 38:
                    if (event.ctrlKey) {
                        TTgoUp();
                    }
                    break;

                case 40:
                    if (event.ctrlKey) {
                        TTgoDown();
                    }
                    break;

                default:
                    break;
            }
        };

        function TTScrollAmt(e) {
            var t = e.value;
            localStorage.setItem("TTScrollAmt", t)
        }

        function jsUcfirst(string) {
            if (string == "" || typeof string == "undefined") {
                string = "I cant find the information to perform this shortcode.";
            }
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        if ("undefined" !== typeof $("input[name$='stars']") && $("input[name$='stars']").length > 0) {

            $("input[name$='stars']").on('change', function() {
                window.TTLeftResults = new Array();
                $("input[name^='left.result.'][name$='stars']").each(function() {
                    var name = $(this).attr('name');
                    var number = name.match(/\d+/);
                    number = parseInt(number) + 1;
                    var val = $(this).val();
                    TTLeftResults[number] = val;
                });

                window.TTRightResults = new Array();
                $("input[name^='right.result.'][name$='stars']").each(function() {
                    var name = $(this).attr('name');
                    var number = name.match(/\d+/);
                    number = parseInt(number) + 1;
                    var val = $(this).val();
                    TTRightResults[number] = val;
                });
            });

            if ("undefined" === typeof TTLeftResults) {
                window.TTLeftResults = new Array();
            }

            if ("undefined" === typeof TTRightResults) {
                window.TTRightResults = new Array();
            }

            window.TTallResults = new Array();

            function TTGetRecordsWithStar(num, type) {

                var result = "";

                if (type == 'left') {
                    result = TTGrabVals(num, TTLeftResults, type);
                } else if (type == 'right') {
                    result = TTGrabVals(num, TTRightResults, type);
                } else if (type == 'all') {
                    result = TTGrabAllVals(num, TTLeftResults, TTRightResults);
                }

                return result;

            }

            function TTGrabVals(num, arr, type) {
                var list = "";

                if (type == 'left') {
                    var letter = 'L';
                } else if (type == 'right') {
                    var letter = 'R';
                }
                var i;
                $.each(arr, function(index, value) {
                    if (value == num) {
                        num = parseFloat(num);
                        list = list + letter + index + ", ";
                    }
                });
                list = list.replace(/,(?=[^,]*$)/, '');
                list = list.replace(/,(?=[^,]*$)/, ', and');
                if (list.length == 0) {
                    list = '';
                }
                return list;
            }

            function TTGrabAllVals(num, arr, arr2) {
                var list = "";

                $.each(arr, function(index, value) {
                    if (value == num) {
                        num = parseInt(num);
                        list += 'L' + index + ", ";
                    }
                });
                list = list.replace(/,(?=[^,]*$)/, '');

                if (list.length >= 4) {
                    list += 'and ';
                }

                $.each(arr2, function(index, value) {
                    if (value == num) {
                        num = parseInt(num);
                        list += 'R' + index + ", ";
                    }
                });

                list = list.replace(/,(?=[^,]*$)/, '');
                if (list.length == 0) {
                    list = '';
                }
                return list;
            }

        }


        window.TTshorties = JSON.parse(localStorage.getItem('TTShorties'));


        $('#ewok-buds-validation-comment,textarea,input').on('keyup', function() {



            var val = $(this).val();
            var capital = true;
            var TTTDS1 = $('#TTDS1').prop('checked');
            if (val.indexOf('/') !== -1 && TTTDS1 && val.indexOf('http') == -1) {
                var query = $('.ewok-task-query').eq(0).text();
                if (query == "") {
                    query = $('.ewok-buds-query').eq(0).text();
                }
                var side = $('[name=score]:checked').val();
                if (side == 'MuchBetterThan') {
                    var side = 'the left side is much better than the right side';
                }

                if (side == 'BetterThan') {
                    var side = 'the left side is better than the right side';
                }

                if (side == 'SlightlyBetterThan') {
                    var side = 'the left side is slightly better than the right side';
                }

                if (side == 'AboutTheSameAs') {
                    var side = 'the left side is about the same as the right side';
                }

                if (side == 'SlightlyWorseThan') {
                    var side = 'the right side is slightly better than the left side';
                }

                if (side == 'WorseThan') {
                    var side = 'the right side is better than the left side';
                }

                if (side == 'MuchWorseThan') {
                    var side = 'the right side is much better than the left side';
                }

                if (typeof side == "undefined") {
                    'Select which side is better before using this shortcode.';
                }

                function TTrecursiveshort(recursive) {


                    var userIntent = 'the user intent';
                    var rightSide = 'the right side';
                    var leftSide = 'the left side';
                    var because = 'because';
                    var therefore = 'therefore,';
                    var leftEmpty = 'the left side is empty';
                    var rightEmpty = 'the right side is empty';
                    var user = 'the user';

                    if ("undefined" !== typeof $("input[name$='stars']") && $("input[name$='stars']").length > 0) {
                        var TTStarArray = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

                        $.each(TTStarArray, function(i, v) {
                            val = val.replace('/' + v + 'l', TTGetRecordsWithStar(v, 'left'));
                            val = val.replace('/' + v + 'r', TTGetRecordsWithStar(v, 'right'));
                            val = val.replace('/' + v + 'a', TTGetRecordsWithStar(v, 'all'));
                        });
                    }

                    if ("undefined" !== typeof TTshorties) {
                        $.each(TTshorties, function() {

                            val = val.replace(this.ShortCode, this.Value);

                        });

                    }

                    val = val.replace('/q', query);
                    val = val.replace('/s', side);
                    val = val.replace('/us', user);
                    val = val.replace('/ui', userIntent);
                    val = val.replace('/ls', leftSide);
                    val = val.replace('/rs', rightSide);
                    val = val.replace('/b', because);
                    val = val.replace('/t', therefore);
                    val = val.replace('/le', leftEmpty);
                    val = val.replace('/re', rightEmpty);
                }


                TTrecursiveshort(false);
                var recursivei = 0;
                while (recursivei < 5) {
                    if ($(this).val().indexOf('/') !== -1) {
                        TTrecursiveshort(true);
                    }
                    recursivei++;
                }

                function capitalizeSentences(capText) {


                    var wordSplit = '. ';

                    var wordArray = capText.split(wordSplit);

                    var numWords = wordArray.length;

                    for (x = 0; x < numWords; x++) {
                        wordArray[x] = wordArray[x].replace(wordArray[x].charAt(0), wordArray[x].charAt(0).toUpperCase());
                        if (x == 0) {
                            capText = wordArray[x] + ". ";
                        } else if (x != numWords - 1) {
                            capText = capText + wordArray[x] + ". ";
                        } else if (x == numWords - 1) {
                            capText = capText + wordArray[x];
                        }
                    }

                    return capText;
                }
                if (val.indexOf('.') !== -1) {
                    val = capitalizeSentences(val);
                }
                val = val.charAt(0).toUpperCase() + val.slice(1);
                $(this).val(val);
            }

        });



        function TTsettings() {
            if (0 == $("#TTmodal").length) {
                $("<link/>", {
                    rel: "stylesheet",
                    type: "text/css",
                    href: "https://www.tickytimer.com/css/m11.css"
                }).appendTo("head"), $(".container").append('<div id="TTmodal" class="modal"><div class="TTmodal-content"><span class="TTclose">&times;</span><div style="width:100%"><div class="TTclose"></div><h4>When To Click</h4><p>Click the bookmarklet on the task page to get to the list of tasks per button (task mapper). Click it each task to start a timer. After a timer has started, click again if you want to scroll past the instructions. Click on any other page and it will open the page quality assistant for that domain.</p><h4>Known Issues</h4><p>Before sending data to TickyTimer, TickyTimer validates the page by checking the error list (located on the top of each task if submitted incorrectly). There are a few types of tasks that do not have this section (some headphone tasks and Youtube Search Suggestion Tasks). TickyTimer will submit the data, but will do so even if there were errors on the task for these particular tasks. When you submit again after fixing your errors you will see a TickyTimer has already submitted the task message. Be mindful that the time it took to correct the issues was not recorded and should be added to your timecard. This happens only on a small set of task types.</p><h4>Scroll Amount (Percentage) - CTRL + Up Arrow | CTRL + Down Arrow</h4><p>Enter a number beteen 1 and 100. If you enter 100 and click on go up, it will go up 100% of the window height. If you enter 50 and hit go down, you will scroll down 50% of the window height. You can technically put a number over 100. It will scroll more than the window height.</p><input style="width:100%" onchange="TTScrollAmt(this)" type="number"  value="100" id="TTScrollAmt"><h4>Custom Shortcodes Import </h4><p><a href="javascript:void(0)" onclick="localStorage.removeItem(\'TTShorties\'); alert(\'Deletion was a success. Please refresh or wait until next task for changes to take place.\');">Click Here to Clear All Custom ShortCodes</a><br>To add custom shortcodes please follow the instuctions <a target="_blank" href="https://www.tickytimer.com/custom-short-codes.php">here</a>. To delete custom shortcodes hit the link above. To edit custom shortcodes, recreate a file using the instuctions on the custom shortcodes page.</p><input type="file" class="file-to-import"><p><label><input id="TTDS1" onclick="TTDS1(this)" type="checkbox">Enable Shortcodes</label></p><h4>Green To Red Toolbar</h4><input onclick="TTGTR()" type="checkbox" id="TTGTR"><p>This setting changes the background color of the toolbar from green to red depending on how much time is left on the task. It starts off as green and gradually becomes red. </p><h4>Open Timer in Tab</h4><input onclick="TTTab()" type="checkbox" id="TTTab"><p>Opens the timer in a new tab instead of a window. <b>Note:</b> Chrome will focus on the new tab everytime a new task is started. This is a browser restriction and cannot be altered. Another option is just have the bookmarklet open in a new window, right click the window, and hit open as tab. This should not focus each time this way.</p><h4>Toolbar Color</h4><input onchange="colorMe()" style="margin-left:5px; margin-right:5px;" onchange="colorMe()"  type="color" id="TickyTimerColor"  value="#efefef" /> <h4>Links </h4><button style="margin-left:5px; margin-right:5px;" type="button" onClick="dashIt()">Dashboard</button><button style="margin-left:5px; margin-right:5px;" type="button" onClick="TTToggle();">Toggle Links</button><p>Notification sounds have been added to the bookmarklet. To mute sounds coming from TickyTimer.com, go to any page on tickytimer.com, right click the tab, and hit mute site.</p><h4>Notification Sound</h4><input id="TTSoundURL" onchange="TTChangeSound(this)" style="width:100%"><h4>Sound Notification Timer</h4><p>At what time left should the notification play? Enter time as m:ss. If you do not want notification sounds set this to 99:99. </p><input onchange="TTChangeSoundTracker(this)" id="TTSoundTracker" style="width:100%"><h4>Sound Exceptions</h4><p>Enter an amount of seconds in which the sound should not play. Ex entering 30 will prevent sound notifications on tasks that are 30 seconds or less.<input  onchange="TTChangeSoundException(this)" id="TTSoundException" style="width:100%"></p><p><a  target="blank" href="https://www.facebook.com/groups/2051461215176210/">RaterMate (Alternative Timer)</a></p><p><a  target="blank" href="http://ss13.moe/usrlocs/">Chris\'s Bookmarklet (Alternative Timer)</a></p></div></div></div>');
                var t = document.getElementById("TTmodal"),
                    e = document.getElementById("TTModalbtn"),
                    o = document.getElementsByClassName("TTclose")[0];
                e.onclick = function() {
                    t.style.display = "block"
                }, o.onclick = function() {
                    t.style.display = "none"
                }, window.onclick = function(e) {
                    e.target == t && (t.style.display = "none")
                }
            }

            var TTDS1 = localStorage.getItem("TTDS1");
            var TTTab = localStorage.getItem("TTTab");
            if (TTDS1 == "1") {
                $('#TTDS1')[0].checked = true;
            }

            if ("1" == localStorage.getItem("TTGTR") && $("#TTGTR").prop("checked", !0), null === localStorage.getItem("TTURL") || "" === localStorage.getItem("TTURL")) var i = "https://sfxcontent.s3.amazonaws.com/soundfx/CashRegister.mp3";
            else i = localStorage.getItem("TTURL");
            if ($("#TTSoundURL").val(i), window.TickySound = new Audio(i), null === localStorage.getItem("TTSoundTracker") || "" === localStorage.getItem("TTSoundTracker")) var a = "0:05";
            else a = localStorage.getItem("TTSoundTracker");
            if ($("#TTSoundTracker").val(a), null === localStorage.getItem("TTSoundException") || "" === localStorage.getItem("TTSoundException")) var n = "60";
            else n = localStorage.getItem("TTSoundException");
            $("#TTSoundException").val(n);
            if (null !== localStorage.getItem("TTScrollAmt")) {
                var item = localStorage.getItem("TTScrollAmt");
                $('#TTScrollAmt').val(item);
            } else {
                $('#TTScrollAmt').val(100);
            }
            if (null !== localStorage.getItem("TTTab")) {
                var tttab = localStorage.getItem("TTTab");
                if (tttab == 1) {
                    $('#TTTab')[0].checked = true;
                }

            }
        }

        function autoSubmitTask() {
            $("#TickyTimerAS").prop("checked") ? localStorage.setItem("AS", "Yes") : localStorage.setItem("AS", "No")
        }
        ("Does this query seek Porn or Racy content?" == $("#ewok-buds-question-classification-0 h2").text()) && ($(" <h2>TickyTimer - Racy Rater</h2>").insertBefore("#ewok-buds-question-classification-0 h2"), $(' <label><input class="TTRacy" onclick="TTRacy(0,this)" type="checkbox">Mark all as porn?</label>').insertAfter("#ewok-buds-question-classification-0 h2:eq(0)"), $(' <label><input class="TTRacy" onclick="TTRacy(1,this)" type="checkbox">Mark all as racy?</label>').insertAfter("#ewok-buds-question-classification-0 h2:eq(0)"), $(' <label><input class="TTRacy" onclick="TTRacy(2,this)" type="checkbox">Mark all as safe?</label>').insertAfter("#ewok-buds-question-classification-0 h2:eq(0)")), void 0 === Number.prototype.toRad && (Number.prototype.toRad = function() {
            return this * Math.PI / 180
        }), void 0 === Number.prototype.toDeg && (Number.prototype.toDeg = function() {
            return this * (180 / Math.PI)
        });
        var taskID = getUrlParameter("taskIds"),
            AETTime = parseFloat($(".ewok-estimated-task-weight").text().match(/[\d\.]+/));
        isNaN(parseFloat(AETTime)) && (AETTime = $("h1:eq(3)").text().match(/[\d]+[\.][\d]+/)), $('input[name="nomoredupes"],input[name="ListenCondition"]:eq(0),input[name="nomoreporn"],input[name="confirmFlags.1"],input[name="left_missing_item"]:eq(1),input[name="right_missing_item"]:eq(1)').prop('checked', true);
        $('#ListenCount,#right-listen-count,#left-listen-count').val(1);
        var taskName = $("h1:eq(1)").text(),
            left = window.screen.width - 285,
            top = window.screen.height - 450,
            AET = 60 * parseFloat(AETTime);
        $('body').append('<input value="1" type="hidden" id="TTCanPlay">');
        if (AET = precisionRound(AET, 2), isNaN(AET) || (countdown(0, AET), $(document).on("submit", "form#ewok-task-form", function() {
                if ($(".ewok-error-field").length > 0) {
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $(".ewok-error-field").eq(0).offset().top - 200
                    }, 0);
                }
                0 == $(".ewok-error-field").length && (localStorage.getItem("LastTask") !== taskID ? messageTicky() : alert("Ticky Timer has already submitted this task."))
            })), "" !== $(".ewok-task-query:first").text()) var TTquery = $(".ewok-task-query:first").text();
        else TTquery = "";
        TTquery = TTquery.replace(/[^a-z0-9\s]/gi, "").replace(/[_\s]/g, "-");



        if (null === localStorage.getItem("TTTab") || 0 == localStorage.getItem("TTTab")) {
            var tickytimer = window.open("https://www.tickytimer.com/bookmarklet.php?version=extension&Task=" + taskName + "&Time=" + AETTime + "&taskIds=" + taskID + "&q=" + encodeURIComponent(TTquery), "TickyTimer", "location=no,height=150,width=285,left=" + left + ",top=" + top + ",scrollbars=yes,toolbar=0,status=0,menubar=0,titlebar=0");
        } else {
            var tickytimer = window.open("https://www.tickytimer.com/bookmarklet-window.php?Task=" + taskName + "&Time=" + AETTime + "&taskIds=" + taskID + "&q=" + encodeURIComponent(TTquery), "_new");
            tickytimer.blur();
            window.focus();
        }

        function messageTicky() {
            0 == $("#ewok-errors-list").find("li").length && (tickytimer.postMessage("stop", "*"), localStorage.setItem("LastTask", taskID))
        }

        function TTContinue() {
            var timeLeft = $('#TickyTimerSpan').text();
            var timeLeft = timeLeft.split(':');
            var secondsLeft = parseInt(timeLeft[0]) * 60 + parseInt(timeLeft[1]);
            countdown(0, secondsLeft);
        }

        function TTpause() {
            var text = $('#TTPause').text();
            if (text == 'Pause') {
                $('#TTCanPlay').val('0');
                tickytimer.postMessage("pause", "*");
                $('#TTPause').text('Continue');
            } else {
                $('#TTCanPlay').val('1');
                if ($('#TickyTimerSpan').text().indexOf('-') == -1) {
                    TTContinue();
                } else {}
                tickytimer.postMessage("play", "*");
                $('#TTPause').text('Pause');
            }
        }

        if ($('.pq-task-main-info').length > 0) {
            var urlY = $('.pq-task-main-info').find('a').eq(0).attr('data-oldhref');
            $('.pq-task-main-info').append('<b>TickyTimer PQ: </b><a target="_blank" href="https://www.tickytimer.com/domain-authority.php?website=' + urlY + '">' + urlY + '</a>');
        }

        function secondsToHms(e) {
            e = Number(e);
            var t = "" + Math.floor(e % 3600 / 60),
                o = "" + Math.floor(e % 3600 % 60);
            return "0" == o.substr(0, 1) && (o = "0" + o), t + ":" + o
        }

        function TTValidateInput(val, max) {
            if (isNaN(val)) {
                return false;
            }

            if ("undefined" == typeof val) {
                return false;
            }

            if (val.length == 0) {
                return false;
            }

            if (val == 0) {
                return false;
            }


            if (val % 0.5 !== 0) {
                return false;
            }

            if (val <= max && val >= 0) {
                return true;
            } else {
                return false;
            }
        }

        function tt1() {
            $('input[type="radio"]:enabled').prop('checked', true);
        }

        function tt2() {
            var response = prompt("Check the Nth radio button in each group. What is N?", "1");
            if (TTValidateInput(response, 99)) {
                response = response - 1;
                var radioNames = [];
                $('input[type="radio"]').each(function() {
                    var radioN = $(this).attr('name');
                    var inArr = radioNames.includes(radioN);
                    var disabled = $(this).prop('disabled');
                    if (!inArr && $(this).parents('.ewok-buds-score').length == 0 && !disabled) {
                        radioNames.push(radioN);
                    }

                });

                radioNames.forEach(function(item) {
                    $('input[name="' + item + '"]:eq(' + response + ')').prop('checked', true);
                });
            }
        }


        function TTActions(fun) {
            if (fun == "tt1") {
                tt1();
            } else if (fun == "tt2") {
                tt2();
            } else if (fun == "tt3") {
                TTSearchQueryOnYoutube();
            }
        }

        function handleAutos() {
            if ($("#TickyTimerAS").prop("checked")) {
                var x = $('#ttaselect').val();
                if (x == "1") {
                    $("#ewok-task-submit-button").click();
                } else if (x == "2") {
                    $("#ewok-task-submit-done-button").focus().click();
                }

            }
        }

        function TTcountUp() {
            var currentTime = $('#TickyTimerSpan').text();
            currentTime = currentTime.replace('-', '');
            var time = currentTime.split(':');
            var minutesLabel = time[0];
            var secondsLabel = time[1];
            var totalSeconds = 0;

            setInterval(setTime, 1000);

            function setTime() {
                if ($('#TTCanPlay').val() == 1) {
                    ++totalSeconds;
                    //secondsLabel.innerHTML = pad(totalSeconds % 60);
                    // minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
                    $('#TickyTimerSpan').text('-' + pad(parseInt(totalSeconds / 60)) + ':' + pad(totalSeconds % 60));
                }
            }

            function pad(val) {
                var valString = val + "";
                if (valString.length < 2) {
                    return "0" + valString;
                } else {
                    return valString;
                }
            }
        }

        function countdown(e, t) {
            var i, a, n, s, r, c = secondsToHms(AET);

            function l(e) {
                return e <= 9 ? "0" + e : e
            }

            function d() {
                var t = 0;

                function o(e) {
                    var t = e + "";
                    return t.length < 2 ? "0" + t : t
                }
                setInterval(function() {
                    if ($('#TTCanPlay').val() == 1) {

                        ++t;
                        var e = "-" + parseInt(t / 60) + ":" + o(t % 60);
                        parseInt(t), parseInt(AET);
                        $("#TickyTimerSpan").text("-" + parseInt(t / 60) + ":" + o(t % 60)), document.title = "(" + e + ") - TickyTimer";
                    }
                }, 1e3);

            }
            i = +new Date + 1e3 * (60 * e + t) + 500,
                function e() {
                    if ($('#TTCanPlay').val() == 1) {

                        if ($("#TTGTR").prop("checked")) {
                            var t = TTgetColor(1 - parseInt(s / 1e3) / parseInt(AET));
                            $("#ewok-submit-div").css("background-color", t)
                        }
                        if ($("#TickyTimerSpan").text() == $("#TTSoundTracker").val() && AET > $("#TTSoundException").val() && TickySound.play(), (s = i - +new Date) < 1e3) document.title = "0:00 (" + c + ")- TickyTimer", $("#TickyTimerSpan").text("0:00"), clearTimeout(e), d(), handleAutos();
                        else {
                            r = new Date(s), a = r.getUTCHours(), n = r.getUTCMinutes(), document.title = (a ? a + ":" + l(n) : n) + ":" + l(r.getUTCSeconds()) + " (" + c + ") - TickyTimer";
                            var o = (a ? a + ":" + l(n) : n) + ":" + l(r.getUTCSeconds());
                            $("#TickyTimerSpan").text(o), "0:00" == o ? (clearTimeout(e), d()) : setTimeout(e, r.getUTCMilliseconds() + 500)
                        }

                    }
                }()
        }
        setTimeout(tickytimer.focus(), 100), $.fn.hasAttr = function(e) {
                return void 0 !== this.attr(e)
            }, $(".ewok-buds-side a").each(function(e) {
                if ($(this).hasAttr("data-oldhref")) var t = $(this).attr("data-oldhref");
                else if ($(this).hasAttr("href")) t = $(this).attr("href");
                else t = "";
                if (-1 !== t.indexOf("google")) {
                    t = (t = t.replace("https://www.google.com/evaluation/url?q=", "")).replace("https://www.raterhub.com/evaluation/rater/task/", "");
                    var o = decodeURIComponent(t),
                        i = $(this).parent().parent().parent();
                    if ((i.hasClass("ewok-buds-result-header") || i.hasClass("ewok-buds-card")) && (i.find(".tickylinks").length < 1 && i.prepend('<a class="tickylinks" href="' + o + '" target="_blank">Open in Browser</a> <span class="divider">|</span>  <a class="tickylinks" target="_blank" href="https://www.tickytimer.com/domain-authority.php?website=' + o + '">Page Quality Assistant</a>'), -1 !== o.indexOf("youtube") && -1 !== o.indexOf("v=") && 0 == i.find(".TTyoutubelink").length)) {
                        var a = o.indexOf("v=");
                        o = o.substr(a + 2), i.prepend('<a class="tickylinks TTyoutubelink" href="javascript:void(0)" onclick="TTYT(\'' + o + '\')">Watch Video</a> <span class="divider">|</span> ')
                    }
                }
            }),

            $("#ewok-submit-div").css("position", "fixed"), $("#ewok-submit-div").css("bottom", 0), $("#ewok-submit-div").css("background-color", "#efefef"), $(".clear:last").css("height", "100px"), $("#ewok-submit-div").css("z-index", 99), $('<button style="margin-left:5px; margin-right:5px;"  type="button" onClick="TTgoDown()">&#9660;</button>').insertAfter("#ewok-task-submit-done-button"), $('<button style="margin-left:5px; margin-right:5px;"  type="button" onClick="TTgoUp()">&#9650;</button>').insertAfter("#ewok-task-submit-done-button"), $('<span style="font-size:15px; background-color:rgb(239, 239, 239); color:#222; padding:5px; margin-left:5px; margin-right:5px;" ><label style="margin-left:5px; margin-right:3px;"><select id="ttaselect" onchange="$(\'#TickyTimerAS\').prop(\'checked\',true)"><option value="1">Auto Submit</option><option value="2">Auto SASR</option></select><input onClick="autoSubmitTask()"   type="checkbox" id="TickyTimerAS"/></label> <span id="TickyTimerSpan"></span></span>').insertAfter("#ewok-task-submit-done-button"), $('<button style="margin-left:5px; margin-right:5px;" type="button" onClick="TTGuidelines()">Guidelines</button>').insertAfter("#ewok-task-submit-done-button"), $('<select style="color:#565656; font-weight:bold; width:80px; margin-left:5px; margin-right:5px; background-color:#f5f5f5; line-height: 17px; padding: 4px 10px 4px 7px; border: 1px solid #dedede; margin-top: auto; margin-bottom: auto;" onchange="TTActions(this.value)"><option>Actions</option><option value="tt1">Check Last Radio Box of Each Group</option><option value="tt2">Check Nth Radio Button of Each Group</option><option value="tt3">Youtube Search Query</option></select>').insertAfter("#ewok-task-submit-done-button"), $('<button style="margin-left:5px; margin-right:5px;" type="button" onClick="tickyTimerRelease()">Release</button>').insertAfter("#ewok-task-submit-done-button"), $(".ewok-task-query:first").text(), "" !== $(".ewok-task-query:first").text() && $('<button style="margin-left:5px; margin-right:5px;"  type="button" onClick="googleIt()">Google</button>').insertAfter("#ewok-task-submit-done-button"), $('<button style="margin-left:5px; margin-right:5px;" id="TTPause" type="button" onClick="TTpause()">Pause</button>').insertAfter("#ewok-task-submit-done-button"), $('<button  margin-left:5px; margin-right:5px;" id="TTModalbtn" type="button" onClick="TTsettings()">Settings</button>').insertAfter("#ewok-task-submit-done-button"), $("#ewok-submit-div").css("min-width", "0px"), $("#ewok-task-cancel-button").css("margin-left", "10px"), TTsettings();
        var s = document.createElement("script");
        if (s.type = "text/javascript", s.src = "https://www.tickytimer.com/node_modules/hacktimer/HackTimer.min.js", $("head").append(s), null === localStorage.getItem("AS") && localStorage.setItem("AS", "No"), "Yes" === localStorage.getItem("AS") && $("#TickyTimerAS").prop("checked", !0), null === localStorage.getItem("color") && localStorage.setItem("color", "#efefef"), $("#TickyTimerColor").val(localStorage.getItem("color")), colorMe(), grapher(), $("body").on("keydown", function(e) {
                if ($("#TickyTimerAS").prop("checked")) var t = !0;
                else t = !1;
                if (clearTimeout(o), $("#TickyTimerAS").prop("checked", !1), t) var o = setTimeout(function() {
                    $("#TickyTimerAS").prop("checked", !0)
                }, 1500)
            }), "undefined" != typeof buds && -1 !== $(".ewok-task-query:first").text()) {
            if (typeof buds.proto_.map !== "undefined" && "undefined" !== buds.proto_.map.location && "undefined" !== typeof buds.proto_.map.location.politicalEntity) {
                if (void 0 !== buds.proto_.map.location.politicalEntity.centerList[0]) var cord = buds.proto_.map.location.politicalEntity.centerList[0] + "," + buds.proto_.map.location.politicalEntity.centerList[1];
                else cord = void 0 !== buds.proto_.map.location.politicalEntity.bounds.hiList ? buds.proto_.map.location.politicalEntity.bounds.hiList[0] + "," + buds.proto_.map.location.politicalEntity.bounds.hiList[1] : buds.proto_.map.location.politicalEntity.name;
                var TTLocation = buds.proto_.map.location.politicalEntity.name,
                    TTLQuery = $(".ewok-task-query:first").text(),
                    TTLocation2 = TTLocation.replace(/\W+(?!$)/g, "-").toLowerCase(),
                    TTLQuery2 = TTLQuery.replace(/\W+(?!$)/g, "-").toLowerCase();
                $("#ewok-buds-query").find('div:contains("User")').html("<div class='tickylinks'>TickyTimer User Location - <span id='TTUserLocation'>" + TTLocation + '</span><br><a class="tickylinks" href="https://www.google.com/maps/search/' + TTLQuery + "/@" + cord + ',14z" target="_blank">Search Query on Maps</a> <span class="divider">|</span> </div>');
            }
        }
        $('.ewok-buds-result-visited-input').val("true");

    } else scrollToTask()
}
$("#ewok-release-screenshot").on("click", function() {
    $("#ewok-submit-div div,.tickylinks,.TTLoc").hide()
}), $("#ewok-release-noscreenshot").on("click", function() {
    $("#ewok-submit-div div,.tickylinks,.TTLoc").show()
});
