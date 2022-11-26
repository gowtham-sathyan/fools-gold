var storyContent = ﻿{"inkVersion":20,"root":[["^<h2><b> Fool's Gold </b></h2>","\n","ev","str","^START","/str","/ev",{"*":"0.c-0","flg":20},{"c-0":["\n",{"->":"start"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"start":[["^It's been decades since you (Kanna) last visited your village and you decide to visit your village to meet your old and bedridden great grandmother (Ajji) for the first time in all these years. Take on the role of Kanna and explore his relationship with his great grandmother to converse about things that have remained unspoken for far too long!","\n","^Ajji lives alone in an old worn down hut in a village that seems to foster very few living beings. You reach Ajji's hut, freshen up, and sit beside her bed to exchange pleasantries and have a conversation with her after all these years.","\n","^Curious to know what your Ajji has to say?","\n","ev","str","^Let's play!","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"play"},{"#f":5}]}],{"#f":1}],"play":["^<b>Kanna</b>: Hello Ajji, how have you been? It's been long, far too long!","\n","^<b>Ajji</b>: Hello Kanna, what can I say? Does it look like I have been well? What can I say? I exist Kanna, pulling along one day at a time. What brings you to me after all these years Kanna? What can this old woman do for you?","\n","^<b>Kanna</b>: I understand Ajji. I just came here since it's been a long time and was wondering how you were and thought I could take your blessings for my future.","\n","^<b>Kanna</b>: I do have one question though Ajji...","\n",{"->":"firstconvo"},{"#f":1}],"firstconvo":[[["ev",{"^->":"firstconvo.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^<b>Kanna</b>: Ajji, are we really rich?",{"->":"$r","var":true},null]}],["ev",{"^->":"firstconvo.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^<b>Kanna</b>: Ajji, can I borrow some money from you?",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"firstconvo.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"commonoption1"},{"#f":5}],"c-1":["ev",{"^->":"firstconvo.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":"commonoption1"},{"#f":5}]}],{"#f":1}],"commonoption1":["^<b>Ajji</b>: Everyone wants money. I wanted money all my life, to escape the misery I am living in. I don't have a single cent to my name. I have lost all of it searching for wealth in my life. But... I know our ancestors were rich and they left a lot, a lot of it. However, I could never get my hands on it even after trying for so long.","\n",{"->":"secondconvo"},{"#f":1}],"secondconvo":[[["ev",{"^->":"secondconvo.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^<b>Kanna</b>: What have our ancestors left behind?",{"->":"$r","var":true},null]}],["ev",{"^->":"secondconvo.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^<b>Kanna</b>: Why haven't you told anyone about this for so long?",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"secondconvo.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"ancestors"},{"#f":5}],"c-1":["ev",{"^->":"secondconvo.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":"nottoldanyone"},{"#f":5}]}],{"#f":1}],"ancestors":["^<b>Ajji</b>: Gold coins! Loads and loads of gold coins.","\n",{"->":"commonoption2"},{"#f":1}],"nottoldanyone":["^<b>Ajji</b>: It’s not an easy task to obtain the wealth. Many men and women in our family have tried it to for ages but to no avail. Infact, I was the closest to obtaining it. Yet I wasn't successful.","\n",{"->":"commonoption2"},{"#f":1}],"commonoption2":[[["ev",{"^->":"commonoption2.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^<b>Kanna</b>: Tell me everything you know about it Ajji..",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"commonoption2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"aboutgold"},{"#f":5}]}],{"#f":1}],"aboutgold":["^<b>Ajji</b>: Our ancestors have left behind a mansion, a bloody haunted mansion! I’ve heard stories that there’s an infinite source of gold coins guarded by a demon, a red creature, deep down in a well, located at the southern most corner of the mansion. I’ve seen and heard many people from our family and outsiders try to get to the gold and never return. Son, in fact even I tried and failed...","\n",{"->":"thirdconvo"},{"#f":1}],"thirdconvo":[[["ev",{"^->":"thirdconvo.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^<b>Kanna</b>: How did you manage to escape alive?",{"->":"$r","var":true},null]}],["ev",{"^->":"thirdconvo.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^<b>Kanna</b>: Can you tell me how to get the gold?",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"thirdconvo.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"escape"},{"#f":5}],"c-1":["ev",{"^->":"thirdconvo.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":"getgold"},{"#f":5}]}],{"#f":1}],"escape":["^<b>Ajji</b>: It was terrible. I was attacked by the demon, found a way to distract it, and climbed out of the well in time. However, I faced the consequences of fighting with the demon- no the consequences of just facing the wretched creature, living it's deadly curse everyday, that left me paralyzed for the rest of my life.","\n",{"->":"commonoption3"},{"#f":1}],"getgold":["^<b>Ajji</b>: Ah! Spoken like a true member of our family. It's not easy. You need to be ready to risk your life. You have to enter the mansion through its only exit mind you , distract the demon like I did, quickly find the gold, and escape before all hell breaks loose in the mansion. Remember no one can help you once you enter the mansion.","\n",{"->":"commonoption3"},{"#f":1}],"commonoption3":[[["ev",{"^->":"commonoption3.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^<b>Kanna</b>: This seems scary and worthless Ajji (In your mind, you think that the old woman has lost her mind and it’s best if you just take leave)",{"->":"$r","var":true},null]}],["ev",{"^->":"commonoption3.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^<b>Kanna</b>: Ajji, I just want money. Tell me more. I will go and bring the gold.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"commonoption3.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"end1"},{"#f":5}],"c-1":["ev",{"^->":"commonoption3.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":"tellmore"},{"#f":5}]}],{"#f":1}],"end1":[[["^<h2>You quickly change the topic, talk to Ajji for awhile longer, take her blessings, and head back home to your family.</h2>","\n","end",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"tellmore":["^<b>Ajji</b>: Kanna the demon is the infinite source of gold! Confused? Yes so was I. The demon drapes itself with nothing but a loin cloth inside which it holds an infinite source of gold. This is infact a curse cast on the demon centuries ago by our ancestors. The demon will forever be wealthy satiating it's greed but will forever be hungry and look for food within the walls of the well. That's why nobody has returned- everyone becomes the demon's prey.","\n","^<b><i>Ajji coughs and tears up","\n","^<b>Ajji</b>: I found a way to distract it. You need flour. Lots of flour. Mix it with water and prepare it in the shape of a doll. Throw it when you face the demon and it will be distracted until it eats the doll. While doing so you need to quickly pull out a coin or two from where it has it stored and quickly get out from there. Do you still want to do it Kanna?","\n",{"->":"fourthconvo"},{"#f":1}],"fourthconvo":[[["ev",{"^->":"fourthconvo.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^<b>Kanna</b>: This seems too risky Ajji, I'm not desperate enough to risk my life. I think I'll take leave now.",{"->":"$r","var":true},null]}],["ev",{"^->":"fourthconvo.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^<b>Kanna</b>: Ajji, I'm going for it no matter what. I need it. I have to.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"fourthconvo.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"end2"},{"#f":5}],"c-1":["ev",{"^->":"fourthconvo.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":"mansion"},{"#f":5}]}],{"#f":1}],"end2":[[["^<h2>You are spooked out by such stories not knowing whether to believe it or not. Either way you just want to go back home and you take leave immediately.","\n","end",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"mansion":[["^<b>Ajji</b>: I will not stop you Kanna, all I wanted was to live a comfortable life. But I couldn't. It's your choice. But always keep in mind whatever I have told you and be very careful. God bless you my child...","\n","ev","str","^<b><i>Change scene","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"changescene"},{"#f":5}]}],{"#f":1}],"changescene":[["^<h3> SCENE NOW CHANGES TO THE HAUNTED MANSION </h3>","\n","^<h4> You geared up the courage, entered the mansion. and found the sourthern most corner of the mansion with the well. You're ready to get the gold </h4>","\n","^How would you like to proceed?","\n","ev","str","^Prepare food for the demon in the shape of dolls","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Enter the well","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"preparefood"},{"#f":5}],"c-1":["\n",{"->":"end3"},{"#f":5}]}],{"#f":1}],"preparefood":[["^You have spent some time preparing food as instructed by your Ajji.","\n","^What would you like to do next?","\n","ev","str","^Enter the well","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^You have changed your mind, and you would like to leave the mansion","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"enterwell"},{"#f":5}],"c-1":["\n",{"->":"end4"},{"#f":5}]}],{"#f":1}],"enterwell":[["^You are now in the well and you see the demon.","\n","^How would you like to proceed?","\n","ev","str","^Take the gold coins","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Throw one of the flour dolls onto the floor","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"end5"},{"#f":5}],"c-1":["\n",{"->":"throwdoll"},{"#f":5}]}],{"#f":1}],"end5":[[["^<h2>You did not listen to what Ajji said. You were careless. The demon sees you and preys on you. You end up dead and not returning just like the rest of your ancestors.","\n","end",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"throwdoll":[["^You have thrown one flour doll onto the floor in order to distract the demon.","\n","^How would you like to proceed?","\n","ev","str","^Take the gold coins","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Throw multiple dolls to get even more gold coins from the demon.","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"endscene1"},{"#f":5}],"c-1":["\n",{"->":"throwmoredolls"},{"#f":5}]}],{"#f":1}],"endscene1":[["^You got it! You got your hands on two gold coins, you grab it from the demon and safely exited the well and the mansion.","\n","^What would be your next course of action?","\n","ev","str","^Go back to Ajji's house","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Flee with the two gold coins and never look back","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"gobackhome"},{"#f":5}],"c-1":["\n",{"->":"end6"},{"#f":5}]}],{"#f":1}],"gobackhome":[["^<b>Ajji</b>: Kanna, you are back, safe and sound! How did it go?","\n",["ev",{"^->":"gobackhome.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^<b>Kanna</b>: I was able to enter the well but unfortunately I could not get any gold coins Ajji... (you lie)",{"->":"$r","var":true},null]}],["ev",{"^->":"gobackhome.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^<b>Kanna</b>: Ajji I was able to get us 2 gold coins!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"gobackhome.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"end7"},{"#f":5}],"c-1":["ev",{"^->":"gobackhome.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"telltruth"},{"#f":5}]}],{"#f":1}],"end7":[[["^<h2>You lie to your great grandmother. You have the two gold coins to yourself. Something that no one else in the family was able to achieve. You are far richer than how you were.","\n","end",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"telltruth":[["^<b>Ajji</b>: You are the only one to have conquered this son! Only one in the family to achieve this. Why don't you stay the night with your Ajji?","\n",["ev",{"^->":"telltruth.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^<b>Kanna</b>: No Ajji, I will have to get back home, but I want you to have half of what I found Ajji. ",{"->":"$r","var":true},null]}],["ev",{"^->":"telltruth.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^<b>Kanna</b>: Sure Ajji!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"telltruth.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"end8"},{"#f":5}],"c-1":["ev",{"^->":"telltruth.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"staythenight"},{"#f":5}]}],{"#f":1}],"end8":[[["^<h2>You say your goodbyes to Ajji and bid adieu! You leave the village to go back to your family- a gold coin richer!","\n","end",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"staythenight":["^<h2>You spend the night at the hut. Talking and rejoincing the gains with Ajji. <b>However, you do not wake up the next morning... you are dead and no one knows how... </b>","\n",{"->":"end"},{"#f":1}],"end6":[[["^<h2>You have two gold coins with yourself. Something that no one in the family has. You are worried that your Ajji might ask for them. You wanted it for yourself and you flee the village without meeting anyone back to your family. You never come back again.","\n","end",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"throwmoredolls":[[["^<h2>Greed. Greed got to your head and you are now dead. Neither Ajji or anyone knew this. The number of dolls you take in the well leads to those many number of demons being spawned. You got greedy and you found yourself preyed on by all the demons. You end up dead and not returning just like the rest of your ancestors.","\n","end",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"end4":[[["^<h2>You chickened out in the last minute. You probably thought that it wasn't worth the risk of losing your life. You quickly decide to leave the mansion and get home safe.","\n","end",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"end3":[[["^<h2>You did not listen to what Ajji said. You were careless. The demon sees you and preys on you. You end up dead and not returning just like the rest of your ancestors.","\n","end",{"->":"end"},{"#f":5,"#n":"g-0"}],null],{"#f":1}],"end":[[["^<h2>THE END","\n","end",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"#f":1}],"listDefs":{}};