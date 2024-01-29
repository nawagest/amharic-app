const words = [
    {
        "w": "መ ሆ ን",
        "translation": "to be"
    },
    {
        "w": "እና",
        "translation": "and"
    },
    {
        "w": "ወደ",
        "translation": "to"
    },
    {
        "w": "የ",
        "translation": "of"
    },
    {
        "w": "ሀ",
        "translation": "a"
    },
    {
        "w": "እኔ",
        "translation": "I"
    },
    {
        "w": "ውስጥ",
        "translation": "in"
    },
    {
        "w": "መያዝ",
        "translation": "to have"
    },
    {
        "w": "ያንን",
        "translation": "that"
    },
    {
        "w": "እሱ",
        "translation": "he"
    },
    {
        "w": "አይደለም",
        "translation": "not"
    },
    {
        "w": "የእሱ",
        "translation": "his"
    },
    {
        "w": "እሷ",
        "translation": "her"
    },
    {
        "w": "እሱ",
        "translation": "it"
    },
    {
        "w": "አንቺ",
        "translation": "you"
    },
    {
        "w": "ከ",
        "translation": "with"
    },
    {
        "w": "ለ",
        "translation": "for"
    },
    {
        "w": "ለመስራት",
        "translation": "to do"
    },
    {
        "w": "እሷ",
        "translation": "she"
    },
    {
        "w": "እንደ",
        "translation": "as"
    },
    {
        "w": "በ",
        "translation": "on"
    },
    {
        "w": "ማለት",
        "translation": "to say"
    },
    {
        "w": "በ",
        "translation": "at"
    },
    {
        "w": "እሱ",
        "translation": "him"
    },
    {
        "w": "ከ",
        "translation": "from"
    },
    {
        "w": "ግን",
        "translation": "but"
    },
    {
        "w": "እኔ",
        "translation": "me"
    },
    {
        "w": "የእኔ",
        "translation": "my"
    },
    {
        "w": "ለመሄድ",
        "translation": "to go"
    },
    {
        "w": "እነሱ",
        "translation": "they"
    },
    {
        "w": "ሁሉም",
        "translation": "all"
    },
    {
        "w": "በ",
        "translation": "by"
    },
    {
        "w": "ይህ",
        "translation": "this"
    },
    {
        "w": "አንድ",
        "translation": "one"
    },
    {
        "w": "ውጪ",
        "translation": "out"
    },
    {
        "w": "ወደላይ",
        "translation": "up"
    },
    {
        "w": "ማወቅ",
        "translation": "to know"
    },
    {
        "w": "ስለዚህ",
        "translation": "so"
    },
    {
        "w": "ሀ",
        "translation": "an"
    },
    {
        "w": "ለማየት",
        "translation": "to see"
    },
    {
        "w": "ሊሆን ይችላል",
        "translation": "could"
    },
    {
        "w": "ወይም",
        "translation": "or"
    },
    {
        "w": "እነሱ",
        "translation": "them"
    },
    {
        "w": "ማግኘት",
        "translation": "to get"
    },
    {
        "w": "እኛ",
        "translation": "we"
    },
    {
        "w": "እንደ",
        "translation": "like"
    },
    {
        "w": "ለመምጣት",
        "translation": "to come"
    },
    {
        "w": "ሰው",
        "translation": "man"
    },
    {
        "w": "ምንድን",
        "translation": "what"
    },
    {
        "w": "መስራት",
        "translation": "to make"
    },
    {
        "w": "እዛ ላይ",
        "translation": "there"
    },
    {
        "w": "ስለ",
        "translation": "about"
    },
    {
        "w": "የት",
        "translation": "which"
    },
    {
        "w": "የእነሱ",
        "translation": "their"
    },
    {
        "w": "ውስጥ",
        "translation": "into"
    },
    {
        "w": "ማሰብ",
        "translation": "to think"
    },
    {
        "w": "ለማየት",
        "translation": "to look"
    },
    {
        "w": "ከሆነ",
        "translation": "if"
    },
    {
        "w": "ማን",
        "translation": "who"
    },
    {
        "w": "መቼ",
        "translation": "when"
    },
    {
        "w": "መውሰድ",
        "translation": "to take"
    },
    {
        "w": "ጊዜ",
        "translation": "time"
    },
    {
        "w": "አይ",
        "translation": "no"
    },
    {
        "w": "ጀርባ",
        "translation": "back"
    },
    {
        "w": "ሊሆን ይችላል",
        "translation": "to can"
    },
    {
        "w": "ፈቃድ",
        "translation": "to will"
    },
    {
        "w": "የእርስዎ",
        "translation": "your"
    },
    {
        "w": "ተጨማሪ",
        "translation": "more"
    },
    {
        "w": "ከዚያ",
        "translation": "then"
    },
    {
        "w": "ታች",
        "translation": "down"
    },
    {
        "w": "ጥሩ",
        "translation": "good"
    },
    {
        "w": "በላይ",
        "translation": "over"
    },
    {
        "w": "መንገር",
        "translation": "to tell"
    },
    {
        "w": "አሁን",
        "translation": "now"
    },
    {
        "w": "እጅ",
        "translation": "hand"
    },
    {
        "w": "አንዳንድ",
        "translation": "some"
    },
    {
        "w": "መፈለግ",
        "translation": "to want"
    },
    {
        "w": "እሺ",
        "translation": "just"
    },
    {
        "w": "ብቻ",
        "translation": "only"
    },
    {
        "w": "ከ",
        "translation": "than"
    },
    {
        "w": "መንገድ",
        "translation": "way"
    },
    {
        "w": "መስጠት",
        "translation": "to give"
    },
    {
        "w": "ሌላ",
        "translation": "other"
    },
    {
        "w": "ቀን",
        "translation": "day"
    },
    {
        "w": "ዓይን",
        "translation": "eye"
    },
    {
        "w": "ከዚህ በፊት",
        "translation": "before"
    },
    {
        "w": "መጠየቅ",
        "translation": "to ask"
    },
    {
        "w": "ማግኘት",
        "translation": "to find"
    },
    {
        "w": "ሁለት",
        "translation": "two"
    },
    {
        "w": "ትንሽ",
        "translation": "little"
    },
    {
        "w": "ረጅም",
        "translation": "long"
    },
    {
        "w": "በጣም",
        "translation": "very"
    },
    {
        "w": "ስሜት",
        "translation": "to feel"
    },
    {
        "w": "ማንኛውም",
        "translation": "any"
    },
    {
        "w": "ነገር",
        "translation": "thing"
    },
    {
        "w": "እንዲሁ",
        "translation": "too"
    },
    {
        "w": "እዚህ",
        "translation": "here"
    },
    {
        "w": "በጭራሽ",
        "translation": "never"
    },
    {
        "w": "መልቀቅ",
        "translation": "to leave"
    },
    {
        "w": "ግለሰብ",
        "translation": "person"
    },
    {
        "w": "አሮጌ",
        "translation": "old"
    },
    {
        "w": "ራስ",
        "translation": "head"
    },
    {
        "w": "ለመታጠፍ",
        "translation": "to turn"
    },
    {
        "w": "በድጋሚ",
        "translation": "again"
    },
    {
        "w": "በ",
        "translation": "through"
    },
    {
        "w": "እንኳን",
        "translation": "even"
    },
    {
        "w": "ፊት",
        "translation": "face"
    },
    {
        "w": "ብዙ",
        "translation": "much"
    },
    {
        "w": "ጠፍቷል",
        "translation": "off"
    },
    {
        "w": "እኛ",
        "translation": "us"
    },
    {
        "w": "አንደኛ",
        "translation": "first"
    },
    {
        "w": "ቀኝ",
        "translation": "right"
    },
    {
        "w": "የእኛ",
        "translation": "our"
    },
    {
        "w": "እንዴት",
        "translation": "how"
    },
    {
        "w": "የት",
        "translation": "where"
    },
    {
        "w": "በኋላ",
        "translation": "after"
    },
    {
        "w": "የ",
        "translation": "its"
    },
    {
        "w": "ሴት",
        "translation": "woman"
    },
    {
        "w": "ራቅ ብሎ",
        "translation": "away"
    },
    {
        "w": "ሕይወት",
        "translation": "life"
    },
    {
        "w": "ለመምሰል",
        "translation": "to seem"
    },
    {
        "w": "መጥራት",
        "translation": "to call"
    },
    {
        "w": "አሁንም",
        "translation": "still"
    },
    {
        "w": "መስማት",
        "translation": "to hear"
    },
    {
        "w": "አመት",
        "translation": "year"
    },
    {
        "w": "ባለቤት",
        "translation": "own"
    },
    {
        "w": "መሥራት",
        "translation": "to work"
    },
    {
        "w": "ቢቻል",
        "translation": "should"
    },
    {
        "w": "ቦታ",
        "translation": "place"
    },
    {
        "w": "ክፍል",
        "translation": "room"
    },
    {
        "w": "መልካም",
        "translation": "well"
    },
    {
        "w": "ለመቆም",
        "translation": "to stand"
    },
    {
        "w": "ማድረግ ያለባቸው",
        "translation": "to must"
    },
    {
        "w": "ራሱ",
        "translation": "himself"
    },
    {
        "w": "አካባቢ",
        "translation": "around"
    },
    {
        "w": "በር",
        "translation": "door"
    },
    {
        "w": "ሊሆን ይችላል",
        "translation": "to might"
    },
    {
        "w": "አንድ ነገር",
        "translation": "something"
    },
    {
        "w": "ለመሞከር",
        "translation": "to try"
    },
    {
        "w": "ማፍቀር",
        "translation": "to love"
    },
    {
        "w": "ቤት",
        "translation": "house"
    },
    {
        "w": "ለሊት",
        "translation": "night"
    },
    {
        "w": "ማስቀመጥ",
        "translation": "to put"
    },
    {
        "w": "ተለክ",
        "translation": "great"
    },
    {
        "w": "እንደዚህ",
        "translation": "such"
    },
    {
        "w": "መጠበቅ",
        "translation": "to keep"
    },
    {
        "w": "ለመቀመጥ",
        "translation": "to sit"
    },
    {
        "w": "መጨረሻ",
        "translation": "last"
    },
    {
        "w": "ለመጀመር",
        "translation": "to begin"
    },
    {
        "w": "ምክንያቱም",
        "translation": "because"
    },
    {
        "w": "እነዚያ",
        "translation": "those"
    },
    {
        "w": "እነዚህ",
        "translation": "these"
    },
    {
        "w": "ቃል",
        "translation": "word"
    },
    {
        "w": "ለመጠቀም",
        "translation": "to use"
    },
    {
        "w": "ከ …. ፍላጎት",
        "translation": "to need"
    },
    {
        "w": "ለመክፈት",
        "translation": "to open"
    },
    {
        "w": "ለማቆየት",
        "translation": "to hold"
    },
    {
        "w": "ሌላ",
        "translation": "another"
    },
    {
        "w": "ገና",
        "translation": "while"
    },
    {
        "w": "ብዙ",
        "translation": "most"
    },
    {
        "w": "መናገር",
        "translation": "to talk"
    },
    {
        "w": "መፍቀድ",
        "translation": "to let"
    },
    {
        "w": "በ",
        "translation": "upon"
    },
    {
        "w": "ሩቅ",
        "translation": "far"
    },
    {
        "w": "ያለ",
        "translation": "without"
    },
    {
        "w": "ቤት",
        "translation": "home"
    },
    {
        "w": "ፈገግታ",
        "translation": "to smile"
    },
    {
        "w": "ሁልጊዜ",
        "translation": "always"
    },
    {
        "w": "ድምጽ",
        "translation": "voice"
    },
    {
        "w": "ልጅ",
        "translation": "child"
    },
    {
        "w": "አባት",
        "translation": "father"
    },
    {
        "w": "ለመራመድ",
        "translation": "to walk"
    },
    {
        "w": "ወጣት",
        "translation": "young"
    },
    {
        "w": "ለማለት",
        "translation": "to mean"
    },
    {
        "w": "መነም",
        "translation": "nothing"
    },
    {
        "w": "መሮጥ",
        "translation": "to run"
    },
    {
        "w": "ቢሆንም",
        "translation": "though"
    },
    {
        "w": "አፍታ",
        "translation": "moment"
    },
    {
        "w": "ላይ",
        "translation": "against"
    },
    {
        "w": "እናት",
        "translation": "mother"
    },
    {
        "w": "ተመሳሳይ",
        "translation": "same"
    },
    {
        "w": "ስም",
        "translation": "name"
    },
    {
        "w": "መናገር",
        "translation": "to speak"
    },
    {
        "w": "ብዙ",
        "translation": "many"
    },
    {
        "w": "አእምሮ",
        "translation": "mind"
    },
    {
        "w": "ጥቂት",
        "translation": "few"
    },
    {
        "w": "ለማምጣት",
        "translation": "to bring"
    },
    {
        "w": "ብርሀን",
        "translation": "light"
    },
    {
        "w": "መዝጋት",
        "translation": "to close"
    },
    {
        "w": "ጎን",
        "translation": "side"
    },
    {
        "w": "ሁልጊዜ",
        "translation": "ever"
    },
    {
        "w": "ለ መንቀሳቀስ",
        "translation": "to move"
    },
    {
        "w": "ሊሆን ይችላል",
        "translation": "to may"
    },
    {
        "w": "ጓደኛ",
        "translation": "friend"
    },
    {
        "w": "ሁሉም",
        "translation": "every"
    },
    {
        "w": "ክንድ",
        "translation": "arm"
    },
    {
        "w": "ሶስት",
        "translation": "three"
    },
    {
        "w": "አንድ ጊዜ",
        "translation": "once"
    },
    {
        "w": "ይበቃል",
        "translation": "enough"
    },
    {
        "w": "ለመሆን",
        "translation": "to become"
    },
    {
        "w": "ሴት ልጅ",
        "translation": "girl"
    },
    {
        "w": "በታች",
        "translation": "under"
    },
    {
        "w": "አዲስ",
        "translation": "new"
    },
    {
        "w": "መጨረሻ",
        "translation": "end"
    },
    {
        "w": "መኖር",
        "translation": "to live"
    },
    {
        "w": "እንዲሁም",
        "translation": "also"
    },
    {
        "w": "ለማገዝ",
        "translation": "to help"
    },
    {
        "w": "መካከል",
        "translation": "between"
    },
    {
        "w": "ዓለም",
        "translation": "world"
    },
    {
        "w": "መውደቅ",
        "translation": "to fall"
    },
    {
        "w": "መጀመር",
        "translation": "to start"
    },
    {
        "w": "እያንዳንዳቸው",
        "translation": "each"
    },
    {
        "w": "ለመቆየት",
        "translation": "to wait"
    },
    {
        "w": "ለመመልከት",
        "translation": "to watch"
    },
    {
        "w": "ለመቆም",
        "translation": "to stop"
    },
    {
        "w": "ማንኛውንም ነገር",
        "translation": "anything"
    },
    {
        "w": "ሁለቱም",
        "translation": "both"
    },
    {
        "w": "እግር",
        "translation": "foot"
    },
    {
        "w": "ክፍል",
        "translation": "part"
    },
    {
        "w": "ትንሽ",
        "translation": "small"
    },
    {
        "w": "እስከ",
        "translation": "until"
    },
    {
        "w": "በእርግጥ",
        "translation": "really"
    },
    {
        "w": "መመለስ",
        "translation": "to answer"
    },
    {
        "w": "ማሳየት",
        "translation": "to show"
    },
    {
        "w": "ወንድ",
        "translation": "boy"
    },
    {
        "w": "ራሷን",
        "translation": "herself"
    },
    {
        "w": "መዋሸት",
        "translation": "to lie"
    },
    {
        "w": "እርግጠኛ ነኝ",
        "translation": "sure"
    },
    {
        "w": "ኮርስ",
        "translation": "course"
    },
    {
        "w": "መከሰት",
        "translation": "to happen"
    },
    {
        "w": "ማመን",
        "translation": "to believe"
    },
    {
        "w": "መመለስ",
        "translation": "to return"
    },
    {
        "w": "ኋላ",
        "translation": "behind"
    },
    {
        "w": "ነጥብ",
        "translation": "point"
    },
    {
        "w": "ቀጥሎ",
        "translation": "next"
    },
    {
        "w": "ገና",
        "translation": "yet"
    },
    {
        "w": "ልብ",
        "translation": "heart"
    },
    {
        "w": "ውሃ",
        "translation": "water"
    },
    {
        "w": "ቅርብ ነው",
        "translation": "almost"
    },
    {
        "w": "ለማዘጋጀት",
        "translation": "to set"
    },
    {
        "w": "አካል",
        "translation": "body"
    },
    {
        "w": "ለምን",
        "translation": "why"
    },
    {
        "w": "ለማለፍ",
        "translation": "to pass"
    },
    {
        "w": "ጠዋት",
        "translation": "morning"
    },
    {
        "w": "ሰአት",
        "translation": "hour"
    },
    {
        "w": "ድምጽ",
        "translation": "sound"
    },
    {
        "w": "ለማሟላት",
        "translation": "to meet"
    },
    {
        "w": "እግዚአብሔር",
        "translation": "God"
    },
    {
        "w": "ነጭ",
        "translation": "white"
    },
    {
        "w": "ለማስታወስ",
        "translation": "to remember"
    },
    {
        "w": "ደግ",
        "translation": "kind"
    },
    {
        "w": "ተስፋ ማድረግ",
        "translation": "to hope"
    },
    {
        "w": "ለመድረስ",
        "translation": "to reach"
    },
    {
        "w": "ለመሞት",
        "translation": "to die"
    },
    {
        "w": "ከባድ",
        "translation": "hard"
    },
    {
        "w": "መጥፎ",
        "translation": "bad"
    },
    {
        "w": "ግማሽ",
        "translation": "half"
    },
    {
        "w": "ለመሳቅ",
        "translation": "to laugh"
    },
    {
        "w": "ቤተሰብ",
        "translation": "family"
    },
    {
        "w": "ከ",
        "translation": "since"
    },
    {
        "w": "ከፍተኛ",
        "translation": "high"
    },
    {
        "w": "መጽሐፍ",
        "translation": "book"
    },
    {
        "w": "ቁስ አካል",
        "translation": "matter"
    },
    {
        "w": "እርምጃ",
        "translation": "step"
    },
    {
        "w": "ለ መቀየር",
        "translation": "to change"
    },
    {
        "w": "ጥያቄ",
        "translation": "question"
    },
    {
        "w": "በመላው",
        "translation": "across"
    },
    {
        "w": "ለመረዳት",
        "translation": "to understand"
    },
    {
        "w": "መከተል",
        "translation": "to follow"
    },
    {
        "w": "አንድ ላየ",
        "translation": "together"
    },
    {
        "w": "ሚስት",
        "translation": "wife"
    },
    {
        "w": "ለመሳብ",
        "translation": "to pull"
    },
    {
        "w": "ጋር",
        "translation": "along"
    },
    {
        "w": "ሰንጠረዥ",
        "translation": "table"
    },
    {
        "w": "ለመጫወት",
        "translation": "to play"
    },
    {
        "w": "ማጣት",
        "translation": "to lose"
    },
    {
        "w": "ትልቅ",
        "translation": "big"
    },
    {
        "w": "ማልቀስ",
        "translation": "to cry"
    },
    {
        "w": "ጥቁር",
        "translation": "black"
    },
    {
        "w": "ፀጉር",
        "translation": "hair"
    },
    {
        "w": "ማንበብ",
        "translation": "to read"
    },
    {
        "w": "ፊት",
        "translation": "front"
    },
    {
        "w": "መላክ",
        "translation": "to send"
    },
    {
        "w": "በጣም",
        "translation": "quite"
    },
    {
        "w": "ለመሰረዝ",
        "translation": "to break"
    },
    {
        "w": "እኔ ራሴ",
        "translation": "myself"
    },
    {
        "w": "ፈቃድ",
        "translation": "to shall"
    },
    {
        "w": "ቀድሞውኑ",
        "translation": "already"
    },
    {
        "w": "ደቂቃ",
        "translation": "minute"
    },
    {
        "w": "ጨለማ",
        "translation": "dark"
    },
    {
        "w": "በቅርቡ",
        "translation": "soon"
    },
    {
        "w": "አልጋ",
        "translation": "bed"
    },
    {
        "w": "ወደ",
        "translation": "toward"
    },
    {
        "w": "ሙሉ",
        "translation": "whole"
    },
    {
        "w": "መኪና",
        "translation": "car"
    },
    {
        "w": "መስኮት",
        "translation": "window"
    },
    {
        "w": "መንቀጥቀጥ",
        "translation": "to shake"
    },
    {
        "w": "ሌላ",
        "translation": "else"
    },
    {
        "w": "እረፍት",
        "translation": "rest"
    },
    {
        "w": "ገንዘብ",
        "translation": "money"
    },
    {
        "w": "እውነታ",
        "translation": "fact"
    },
    {
        "w": "ወንድ ልጅ",
        "translation": "son"
    },
    {
        "w": "መፃፍ",
        "translation": "to write"
    },
    {
        "w": "እሳት",
        "translation": "fire"
    },
    {
        "w": "ሁለተኛ",
        "translation": "second"
    },
    {
        "w": "ለ መቅረት",
        "translation": "to stay"
    },
    {
        "w": "አስቂኝ ነው",
        "translation": "to wonder"
    },
    {
        "w": "ጉዳይ",
        "translation": "case"
    },
    {
        "w": "ታሪክ",
        "translation": "story"
    },
    {
        "w": "መስመር",
        "translation": "line"
    },
    {
        "w": "ለማደግ",
        "translation": "to grow"
    },
    {
        "w": "አየር",
        "translation": "air"
    },
    {
        "w": "መፈለግ",
        "translation": "to wish"
    },
    {
        "w": "ሐሳብ",
        "translation": "thought"
    },
    {
        "w": "እንዲነሣ",
        "translation": "to rise"
    },
    {
        "w": "ቢያንስ",
        "translation": "least"
    },
    {
        "w": "ሙሉ",
        "translation": "full"
    },
    {
        "w": "ለመያዝ",
        "translation": "to catch"
    },
    {
        "w": "ለመምራት",
        "translation": "to lead"
    },
    {
        "w": "ትልቅ",
        "translation": "large"
    },
    {
        "w": "እንዲታይ",
        "translation": "to appear"
    },
    {
        "w": "ሁሉም ነገር",
        "translation": "everything"
    },
    {
        "w": "ለመንከባከብ",
        "translation": "to care"
    },
    {
        "w": "ተሸከም",
        "translation": "to carry"
    },
    {
        "w": "ሞት",
        "translation": "death"
    },
    {
        "w": "መተኛት",
        "translation": "to sleep"
    },
    {
        "w": "መግደል",
        "translation": "to kill"
    },
    {
        "w": "ሐሳብ",
        "translation": "idea"
    },
    {
        "w": "መልስ ለመስጠት",
        "translation": "to reply"
    },
    {
        "w": "ለመልበስ",
        "translation": "to wear"
    },
    {
        "w": "ግድግዳ",
        "translation": "wall"
    },
    {
        "w": "መንዳት",
        "translation": "to drive"
    },
    {
        "w": "ቅርብ",
        "translation": "near"
    },
    {
        "w": "ለመሳብ",
        "translation": "to draw"
    },
    {
        "w": "ትከሻ",
        "translation": "shoulder"
    },
    {
        "w": "ሳምንት",
        "translation": "week"
    },
    {
        "w": "ያለፈ",
        "translation": "past"
    },
    {
        "w": "ሞቷል",
        "translation": "dead"
    },
    {
        "w": "ቀደም ብሎ",
        "translation": "early"
    },
    {
        "w": "ለማየት",
        "translation": "to stare"
    },
    {
        "w": "ብቻ",
        "translation": "alone"
    },
    {
        "w": "ስሜት",
        "translation": "sense"
    },
    {
        "w": "አፍ",
        "translation": "mouth"
    },
    {
        "w": "ይልቁንስ",
        "translation": "rather"
    },
    {
        "w": "መሸከም",
        "translation": "to bear"
    },
    {
        "w": "አራት",
        "translation": "four"
    },
    {
        "w": "ለመቀጠል",
        "translation": "to continue"
    },
    {
        "w": "ዛፍ",
        "translation": "tree"
    },
    {
        "w": "ወንድም",
        "translation": "brother"
    },
    {
        "w": "ምክንያት",
        "translation": "reason"
    },
    {
        "w": "ፈረስ",
        "translation": "horse"
    },
    {
        "w": "ሌሎች",
        "translation": "others"
    },
    {
        "w": "ትዕዛዝ",
        "translation": "order"
    },
    {
        "w": "ዕጣ",
        "translation": "lot"
    },
    {
        "w": "አምስት",
        "translation": "five"
    },
    {
        "w": "ለመንካት",
        "translation": "to touch"
    },
    {
        "w": "ዙር",
        "translation": "round"
    },
    {
        "w": "ጥልቀት",
        "translation": "deep"
    },
    {
        "w": "ደብዳቤ",
        "translation": "letter"
    },
    {
        "w": "ማስት",
        "translation": "Miss"
    },
    {
        "w": "ለመገመት",
        "translation": "to suppose"
    },
    {
        "w": "ኃይል",
        "translation": "force"
    },
    {
        "w": "ከተማ",
        "translation": "town"
    },
    {
        "w": "መብላት",
        "translation": "to eat"
    },
    {
        "w": "ግልፅ",
        "translation": "clear"
    },
    {
        "w": "ለማግባት",
        "translation": "to marry"
    },
    {
        "w": "መወርወር",
        "translation": "to throw"
    },
    {
        "w": "አገር",
        "translation": "country"
    },
    {
        "w": "አለ",
        "translation": "present"
    },
    {
        "w": "ውስጥ",
        "translation": "inside"
    },
    {
        "w": "ወለል",
        "translation": "floor"
    },
    {
        "w": "መክፈል",
        "translation": "to pay"
    },
    {
        "w": "መገረም",
        "translation": "to nod"
    },
    {
        "w": "ጣት",
        "translation": "finger"
    },
    {
        "w": "መቆየት",
        "translation": "to remain"
    },
    {
        "w": "እንባ",
        "translation": "tear"
    },
    {
        "w": "ጎዳና",
        "translation": "street"
    },
    {
        "w": "እመቤት",
        "translation": "lady"
    },
    {
        "w": "ያነሰ",
        "translation": "less"
    },
    {
        "w": "ፍርሃት",
        "translation": "fear"
    },
    {
        "w": "አንድ ሰው",
        "translation": "someone"
    },
    {
        "w": "ንግድ",
        "translation": "business"
    },
    {
        "w": "ችሎታ",
        "translation": "able"
    },
    {
        "w": "ወንበር",
        "translation": "chair"
    },
    {
        "w": "መርሳት",
        "translation": "to forget"
    },
    {
        "w": "ለመምረጥ",
        "translation": "to pick"
    },
    {
        "w": "የሚጠብቀው",
        "translation": "to expect"
    },
    {
        "w": "ቀይ",
        "translation": "red"
    },
    {
        "w": "ኃይል",
        "translation": "power"
    },
    {
        "w": "ለጨረፍታ",
        "translation": "to glance"
    },
    {
        "w": "ምናልባት",
        "translation": "perhaps"
    },
    {
        "w": "አጭር",
        "translation": "short"
    },
    {
        "w": "መሬት",
        "translation": "ground"
    },
    {
        "w": "እውነት",
        "translation": "true"
    },
    {
        "w": "ከንፈር",
        "translation": "lip"
    },
    {
        "w": "እውን",
        "translation": "real"
    },
    {
        "w": "መልበስ",
        "translation": "to dress"
    },
    {
        "w": "ወር",
        "translation": "month"
    },
    {
        "w": "ለ መስማት",
        "translation": "to listen"
    },
    {
        "w": "ረፍዷል",
        "translation": "late"
    },
    {
        "w": "ትምህርት ቤት",
        "translation": "school"
    },
    {
        "w": "ወይም",
        "translation": "either"
    },
    {
        "w": "ማን",
        "translation": "whom"
    },
    {
        "w": "ዝቅተኛ",
        "translation": "low"
    },
    {
        "w": "በ",
        "translation": "among"
    },
    {
        "w": "ባል",
        "translation": "husband"
    },
    {
        "w": "መጨመር",
        "translation": "to add"
    },
    {
        "w": "የተለየ",
        "translation": "different"
    },
    {
        "w": "መጣል",
        "translation": "to drop"
    },
    {
        "w": "መጠጣት",
        "translation": "to drink"
    },
    {
        "w": "ለመማር",
        "translation": "to learn"
    },
    {
        "w": "በድንገት",
        "translation": "suddenly"
    },
    {
        "w": "ወረቀት",
        "translation": "paper"
    },
    {
        "w": "መሬት",
        "translation": "land"
    },
    {
        "w": "ተራ",
        "translation": "sort"
    },
    {
        "w": "ብዙ ጊዜ",
        "translation": "often"
    },
    {
        "w": "ምሽት",
        "translation": "evening"
    },
    {
        "w": "ከላይ",
        "translation": "above"
    },
    {
        "w": "መቶ",
        "translation": "hundred"
    },
    {
        "w": "መወሰን",
        "translation": "to decide"
    },
    {
        "w": "ለማስታወቅ",
        "translation": "to notice"
    },
    {
        "w": "ሴት ልጅ",
        "translation": "daughter"
    },
    {
        "w": "ቢሮ",
        "translation": "office"
    },
    {
        "w": "ቅዝቃዜ",
        "translation": "cold"
    },
    {
        "w": "ምስል",
        "translation": "figure"
    },
    {
        "w": "መንገድ",
        "translation": "road"
    },
    {
        "w": "ስሜት",
        "translation": "feeling"
    },
    {
        "w": "ለማሰረዝ",
        "translation": "to hang"
    },
    {
        "w": "መቁረጥ",
        "translation": "to cut"
    },
    {
        "w": "ቁጥር",
        "translation": "number"
    },
    {
        "w": "ጥሩ",
        "translation": "fine"
    },
    {
        "w": "ከተማ",
        "translation": "city"
    },
    {
        "w": "የሚገርም ነው",
        "translation": "to surprise"
    },
    {
        "w": "ማሳደግ",
        "translation": "to raise"
    },
    {
        "w": "ለመሙላት",
        "translation": "to fill"
    },
    {
        "w": "ብዙ",
        "translation": "several"
    },
    {
        "w": "ከ",
        "translation": "whose"
    },
    {
        "w": "ደካማ",
        "translation": "poor"
    },
    {
        "w": "አንዳንድ",
        "translation": "certain"
    },
    {
        "w": "ዕቅድ",
        "translation": "plan"
    },
    {
        "w": "ምናልባት",
        "translation": "probably"
    },
    {
        "w": "በፊት",
        "translation": "ago"
    },
    {
        "w": "ከላይ",
        "translation": "top"
    },
    {
        "w": "መክንያት መሆን",
        "translation": "to cause"
    },
    {
        "w": "ለመግባት",
        "translation": "to enter"
    },
    {
        "w": "ዝግጁ",
        "translation": "ready"
    },
    {
        "w": "ሰማያዊ",
        "translation": "blue"
    },
    {
        "w": "ውስጥ",
        "translation": "within"
    },
    {
        "w": "እራሳቸው",
        "translation": "themselves"
    },
    {
        "w": "ወደፊት",
        "translation": "forward"
    },
    {
        "w": "እህት",
        "translation": "sister"
    },
    {
        "w": "ወጪዎች",
        "translation": "to spend"
    },
    {
        "w": "ግዛት",
        "translation": "state"
    },
    {
        "w": "ይሁንና",
        "translation": "however"
    },
    {
        "w": "ለመዋጋት",
        "translation": "to fight"
    },
    {
        "w": "ጠንካራ",
        "translation": "strong"
    },
    {
        "w": "መ ሳ ም",
        "translation": "to kiss"
    },
    {
        "w": "በ",
        "translation": "during"
    },
    {
        "w": "ቢት",
        "translation": "bit"
    },
    {
        "w": "ለማስደሰት",
        "translation": "to please"
    },
    {
        "w": "ውጭ",
        "translation": "outside"
    },
    {
        "w": "እግር",
        "translation": "leg"
    },
    {
        "w": "ውድ",
        "translation": "dear"
    },
    {
        "w": "ደስተኛ",
        "translation": "happy"
    },
    {
        "w": "ህልም",
        "translation": "dream"
    },
    {
        "w": "ማስታወሻ",
        "translation": "note"
    },
    {
        "w": "የተሳሳተ",
        "translation": "wrong"
    },
    {
        "w": "እንድገነዘብ",
        "translation": "to realize"
    },
    {
        "w": "ወለድ",
        "translation": "interest"
    },
    {
        "w": "ደም",
        "translation": "blood"
    },
    {
        "w": "በፍጥነት",
        "translation": "quickly"
    },
    {
        "w": "ለማብራራት",
        "translation": "to explain"
    },
    {
        "w": "ነፋስ",
        "translation": "wind"
    },
    {
        "w": "ሰው",
        "translation": "human"
    },
    {
        "w": "ጌታ",
        "translation": "Lord"
    },
    {
        "w": "መጋለብ",
        "translation": "to ride"
    },
    {
        "w": "ለመሸፈን",
        "translation": "to cover"
    },
    {
        "w": "ማመንም",
        "translation": "to lean"
    },
    {
        "w": "ለመፍቀድ",
        "translation": "to allow"
    },
    {
        "w": "አስር",
        "translation": "ten"
    },
    {
        "w": "ጥርጣሬ",
        "translation": "doubt"
    },
    {
        "w": "ሃያ",
        "translation": "twenty"
    },
    {
        "w": "ጌታዬ",
        "translation": "sir"
    },
    {
        "w": "ቆንጆ",
        "translation": "beautiful"
    },
    {
        "w": "ጦርነት",
        "translation": "war"
    },
    {
        "w": "ቆንጆ",
        "translation": "pretty"
    },
    {
        "w": "ቀስ ብሎ",
        "translation": "slowly"
    },
    {
        "w": "ሊሆን ይችላል",
        "translation": "possible"
    },
    {
        "w": "ችግር",
        "translation": "trouble"
    },
    {
        "w": "ሊጎበኝ ነው",
        "translation": "to visit"
    },
    {
        "w": "ዕድል",
        "translation": "chance"
    },
    {
        "w": "መግፋት",
        "translation": "to push"
    },
    {
        "w": "ፍርይ",
        "translation": "free"
    },
    {
        "w": "ትንፋሽ",
        "translation": "breath"
    },
    {
        "w": "እቃ",
        "translation": "piece"
    },
    {
        "w": "ፀሐይ",
        "translation": "sun"
    },
    {
        "w": "እውነት",
        "translation": "truth"
    },
    {
        "w": "ለመድረስ",
        "translation": "to arrive"
    },
    {
        "w": "ከግምት ውስጥ",
        "translation": "to consider"
    },
    {
        "w": "ይኑር",
        "translation": "whether"
    },
    {
        "w": "እርምጃ",
        "translation": "to act"
    },
    {
        "w": "በራሱ",
        "translation": "itself"
    },
    {
        "w": "እና",
        "translation": "nor"
    },
    {
        "w": "ለማንኛውም",
        "translation": "anyone"
    },
    {
        "w": "ይፈርሙ",
        "translation": "sign"
    },
    {
        "w": "ስምምነት",
        "translation": "deal"
    },
    {
        "w": "ለማቋረጥ",
        "translation": "to cross"
    },
    {
        "w": "መስተዋት",
        "translation": "glass"
    },
    {
        "w": "ስራ",
        "translation": "job"
    },
    {
        "w": "መጨመር",
        "translation": "to finish"
    },
    {
        "w": "ሹክሹክታ",
        "translation": "to whisper"
    },
    {
        "w": "ለማጥናት",
        "translation": "to study"
    },
    {
        "w": "ቅጽ",
        "translation": "form"
    },
    {
        "w": "ቀላል",
        "translation": "easy"
    },
    {
        "w": "እድሜ",
        "translation": "age"
    },
    {
        "w": "ስዕል",
        "translation": "picture"
    },
    {
        "w": "ስድስት",
        "translation": "six"
    },
    {
        "w": "በመጨረሻ",
        "translation": "finally"
    },
    {
        "w": "ለመግዛት",
        "translation": "to buy"
    },
    {
        "w": "ዝምታ",
        "translation": "silence"
    },
    {
        "w": "ውሻ",
        "translation": "dog"
    },
    {
        "w": "መጣል",
        "translation": "to lay"
    },
    {
        "w": "ዕይታ",
        "translation": "sight"
    },
    {
        "w": "ጆሮ",
        "translation": "ear"
    },
    {
        "w": "ለ መስጠት",
        "translation": "to offer"
    },
    {
        "w": "መርከብ",
        "translation": "ship"
    },
    {
        "w": "እራስዎ",
        "translation": "yourself"
    },
    {
        "w": "ወደ",
        "translation": "towards"
    },
    {
        "w": "ባሕር",
        "translation": "sea"
    },
    {
        "w": "ደውል",
        "translation": "ring"
    },
    {
        "w": "ቃል መግባት",
        "translation": "to promise"
    },
    {
        "w": "ለማንሳት",
        "translation": "to lift"
    },
    {
        "w": "መብረር",
        "translation": "to fly"
    },
    {
        "w": "ሺ",
        "translation": "thousand"
    },
    {
        "w": "ለመገመት",
        "translation": "to guess"
    },
    {
        "w": "ጥግ",
        "translation": "corner"
    },
    {
        "w": "ለመጨነቅ",
        "translation": "to worry"
    },
    {
        "w": "እይታ",
        "translation": "view"
    },
    {
        "w": "ችግር",
        "translation": "problem"
    },
    {
        "w": "ጎን",
        "translation": "beside"
    },
    {
        "w": "ስልክ",
        "translation": "phone"
    },
    {
        "w": "ትኩረት",
        "translation": "attention"
    },
    {
        "w": "መደበቅ",
        "translation": "to hide"
    },
    {
        "w": "ናፈቅኩ",
        "translation": "to miss"
    },
    {
        "w": "ዓይን",
        "translation": "gaze"
    },
    {
        "w": "ፖሊስ",
        "translation": "police"
    },
    {
        "w": "መመዝገብ",
        "translation": "to save"
    },
    {
        "w": "ድግስ",
        "translation": "party"
    },
    {
        "w": "እንግሊዝኛ",
        "translation": "English"
    },
    {
        "w": "ድንጋይ",
        "translation": "stone"
    },
    {
        "w": "ለንደን",
        "translation": "London"
    },
    {
        "w": "እንግዳ",
        "translation": "strange"
    },
    {
        "w": "ህጻን",
        "translation": "baby"
    },
    {
        "w": "መፍራት",
        "translation": "afraid"
    },
    {
        "w": "ሕመም",
        "translation": "pain"
    },
    {
        "w": "ማዕበል",
        "translation": "wave"
    },
    {
        "w": "ወጥ ቤት",
        "translation": "kitchen"
    },
    {
        "w": "ለመስማማት",
        "translation": "to agree"
    },
    {
        "w": "ማሰራጨት",
        "translation": "to strike"
    },
    {
        "w": "ለመጫን",
        "translation": "to press"
    },
    {
        "w": "አረንጓዴ",
        "translation": "green"
    },
    {
        "w": "ጥንዶች",
        "translation": "couple"
    },
    {
        "w": "ወንዴ",
        "translation": "guy"
    },
    {
        "w": "አዝናለሁ",
        "translation": "sorry"
    },
    {
        "w": "ተሞክሮ",
        "translation": "experience"
    },
    {
        "w": "እስከ",
        "translation": "till"
    },
    {
        "w": "አሜሪካዊ",
        "translation": "American"
    },
    {
        "w": "ምን አልባት",
        "translation": "maybe"
    },
    {
        "w": "መቀመጫ",
        "translation": "seat"
    },
    {
        "w": "ለመዘለል",
        "translation": "to roll"
    },
    {
        "w": "በእርግጥም",
        "translation": "indeed"
    },
    {
        "w": "ለመምታት",
        "translation": "to blow"
    },
    {
        "w": "አንዳንድ ጊዜ",
        "translation": "sometimes"
    },
    {
        "w": "ከባድ",
        "translation": "heavy"
    },
    {
        "w": "ነፍስ",
        "translation": "soul"
    },
    {
        "w": "አስፈላጊ",
        "translation": "important"
    },
    {
        "w": "ልጅ",
        "translation": "kid"
    },
    {
        "w": "ሙቅ",
        "translation": "warm"
    },
    {
        "w": "ለጉሳያ",
        "translation": "to concern"
    },
    {
        "w": "የእኔ",
        "translation": "mine"
    },
    {
        "w": "ቦታ",
        "translation": "position"
    },
    {
        "w": "ሞቃት",
        "translation": "hot"
    },
    {
        "w": "ሐኪም",
        "translation": "doctor"
    },
    {
        "w": "ከዚህ በላይ",
        "translation": "beyond"
    },
    {
        "w": "መጮህ",
        "translation": "to shout"
    },
    {
        "w": "ርዕሰ ጉዳይ",
        "translation": "subject"
    },
    {
        "w": "እራት",
        "translation": "dinner"
    },
    {
        "w": "ለማጣራት",
        "translation": "to check"
    },
    {
        "w": "መንፈስ",
        "translation": "spirit"
    },
    {
        "w": "ከሰአት",
        "translation": "afternoon"
    },
    {
        "w": "ፖሊስ",
        "translation": "officer"
    },
    {
        "w": "ጸጥ ያለ",
        "translation": "quiet"
    },
    {
        "w": "ምኞት",
        "translation": "desire"
    },
    {
        "w": "ካልሆነ በስተቀር",
        "translation": "except"
    },
    {
        "w": "ምድር",
        "translation": "earth"
    },
    {
        "w": "ለማሰብ ሞክር",
        "translation": "to imagine"
    },
    {
        "w": "ለማቆም",
        "translation": "to pause"
    },
    {
        "w": "ለመቅረብ",
        "translation": "to approach"
    },
    {
        "w": "አንገት",
        "translation": "neck"
    },
    {
        "w": "ማይል",
        "translation": "mile"
    },
    {
        "w": "መልክ",
        "translation": "manner"
    },
    {
        "w": "መቀላቀል",
        "translation": "to join"
    },
    {
        "w": "ምግብ",
        "translation": "food"
    },
    {
        "w": "ሕንፃ",
        "translation": "building"
    },
    {
        "w": "ለማጣበቅ",
        "translation": "to stick"
    },
    {
        "w": "ጠርዝ",
        "translation": "edge"
    },
    {
        "w": "መስክ",
        "translation": "field"
    },
    {
        "w": "ተፈጥሮ",
        "translation": "nature"
    },
    {
        "w": "ወንዝ",
        "translation": "river"
    },
    {
        "w": "ሮክ",
        "translation": "rock"
    },
    {
        "w": "ጠመንጃ",
        "translation": "gun"
    },
    {
        "w": "ለመጥቀስ",
        "translation": "to mention"
    },
    {
        "w": "በቀጥታ",
        "translation": "straight"
    },
    {
        "w": "ሰፊ",
        "translation": "wide"
    },
    {
        "w": "ኩባንያ",
        "translation": "company"
    },
    {
        "w": "ሰማይ",
        "translation": "sky"
    },
    {
        "w": "ለመምታት",
        "translation": "to shoot"
    },
    {
        "w": "እንጨት",
        "translation": "wood"
    },
    {
        "w": "መምታት",
        "translation": "to hit"
    },
    {
        "w": "መደነስ",
        "translation": "to dance"
    },
    {
        "w": "ሕዝብ",
        "translation": "crowd"
    },
    {
        "w": "ለማቃጠል",
        "translation": "to burn"
    },
    {
        "w": "ጓደኛ",
        "translation": "fellow"
    },
    {
        "w": "ገላጭ",
        "translation": "expression"
    },
    {
        "w": "ሳጥን",
        "translation": "box"
    },
    {
        "w": "መቆጣጠር",
        "translation": "control"
    },
    {
        "w": "ቤተ ክርስቲያን",
        "translation": "church"
    },
    {
        "w": "ለቅሶ",
        "translation": "to sigh"
    },
    {
        "w": "ሁሉም ሰው",
        "translation": "everyone"
    },
    {
        "w": "መምረጥ",
        "translation": "to choose"
    },
    {
        "w": "ለመካፈል",
        "translation": "to share"
    },
    {
        "w": "ለመጠቆም",
        "translation": "to suggest"
    },
    {
        "w": "ንጉስ",
        "translation": "king"
    },
    {
        "w": "ወላጅ",
        "translation": "parent"
    },
    {
        "w": "ጥሩ",
        "translation": "nice"
    },
    {
        "w": "ለመንሸራተት",
        "translation": "to slip"
    },
    {
        "w": "ለመገንባት",
        "translation": "to build"
    },
    {
        "w": "በ",
        "translation": "onto"
    },
    {
        "w": "ቅርብ",
        "translation": "nearly"
    },
    {
        "w": "ማህደረ ትውስታ",
        "translation": "memory"
    },
    {
        "w": "ልብሶች",
        "translation": "clothes"
    },
    {
        "w": "ሪፖርት",
        "translation": "report"
    },
    {
        "w": "በቀላሉ",
        "translation": "simply"
    },
    {
        "w": "ለመቀበል",
        "translation": "to accept"
    },
    {
        "w": "መዝናናት",
        "translation": "to enjoy"
    },
    {
        "w": "ቆዳ",
        "translation": "skin"
    },
    {
        "w": "ሚስጥራዊ",
        "translation": "secret"
    },
    {
        "w": "በእርግጠኝነት",
        "translation": "certainly"
    },
    {
        "w": "ጨዋታ",
        "translation": "game"
    },
    {
        "w": "ውይይት",
        "translation": "conversation"
    },
    {
        "w": "ጀልባ",
        "translation": "boat"
    },
    {
        "w": "ባዶ",
        "translation": "empty"
    },
    {
        "w": "ዛሬ",
        "translation": "today"
    },
    {
        "w": "ገሃነም",
        "translation": "hell"
    },
    {
        "w": "ለማገልገል",
        "translation": "to serve"
    },
    {
        "w": "ለስላሳ",
        "translation": "soft"
    },
    {
        "w": "ለማምለጥ",
        "translation": "to escape"
    },
    {
        "w": "ድምጽ",
        "translation": "tone"
    },
    {
        "w": "ለመጥላት",
        "translation": "to hate"
    },
    {
        "w": "አቅጣጫ",
        "translation": "direction"
    },
    {
        "w": "ሙከራ",
        "translation": "attempt"
    },
    {
        "w": "ቢሆንም",
        "translation": "although"
    },
    {
        "w": "ቡድን",
        "translation": "group"
    },
    {
        "w": "ጉንጭ",
        "translation": "cheek"
    },
    {
        "w": "ኪስ",
        "translation": "pocket"
    },
    {
        "w": "ለማስተዳደር",
        "translation": "to manage"
    },
    {
        "w": "አዎ",
        "translation": "yes"
    },
    {
        "w": "ለመፈለግ",
        "translation": "to search"
    },
    {
        "w": "ለማሽተት",
        "translation": "to smell"
    },
    {
        "w": "ጸደይ",
        "translation": "spring"
    },
    {
        "w": "አጠቃላይ",
        "translation": "general"
    },
    {
        "w": "መካከለኛ",
        "translation": "middle"
    },
    {
        "w": "መለያ",
        "translation": "account"
    },
    {
        "w": "ግራ",
        "translation": "left"
    },
    {
        "w": "በትክክል",
        "translation": "exactly"
    },
    {
        "w": "አገልግሎት",
        "translation": "service"
    },
    {
        "w": "በመከተል",
        "translation": "following"
    },
    {
        "w": "ለመጉዳት",
        "translation": "to hurt"
    },
    {
        "w": "ክፍያ",
        "translation": "charge"
    },
    {
        "w": "ህዝባዊ",
        "translation": "public"
    },
    {
        "w": "መረጋጋት",
        "translation": "to settle"
    },
    {
        "w": "ደስታ",
        "translation": "pleasure"
    },
    {
        "w": "ይልቁንስ",
        "translation": "instead"
    },
    {
        "w": "ለማግኘት",
        "translation": "to discover"
    },
    {
        "w": "ትሁት ሰው",
        "translation": "gentleman"
    },
    {
        "w": "ወርቅ",
        "translation": "gold"
    },
    {
        "w": "ምንአገባኝ",
        "translation": "whatever"
    },
    {
        "w": "ዜና",
        "translation": "news"
    },
    {
        "w": "ጉልበት",
        "translation": "knee"
    },
    {
        "w": "ብሩህ",
        "translation": "bright"
    },
    {
        "w": "ወድያው",
        "translation": "immediately"
    },
    {
        "w": "ደስተኛ",
        "translation": "glad"
    },
    {
        "w": "ሊመታ",
        "translation": "to beat"
    },
    {
        "w": "ፈጣን",
        "translation": "fast"
    },
    {
        "w": "ነጠላ",
        "translation": "single"
    },
    {
        "w": "በእርግጥ",
        "translation": "actually"
    },
    {
        "w": "ርቀት",
        "translation": "distance"
    },
    {
        "w": "መቀበል",
        "translation": "to receive"
    },
    {
        "w": "ቦታ",
        "translation": "spot"
    },
    {
        "w": "ትዕይንት",
        "translation": "scene"
    },
    {
        "w": "ለመጠየቅ",
        "translation": "to demand"
    },
    {
        "w": "መቀበል",
        "translation": "to admit"
    },
    {
        "w": "ባቡር",
        "translation": "train"
    },
    {
        "w": "ክፍል",
        "translation": "class"
    },
    {
        "w": "እንስሳ",
        "translation": "animal"
    },
    {
        "w": "ዳስ",
        "translation": "desk"
    },
    {
        "w": "አዳራሽ",
        "translation": "hall"
    },
    {
        "w": "ደረሰ",
        "translation": "chest"
    },
    {
        "w": "ጌታ",
        "translation": "master"
    },
    {
        "w": "ቡና",
        "translation": "coffee"
    },
    {
        "w": "መተማመን",
        "translation": "to trust"
    },
    {
        "w": "ጠባቂ",
        "translation": "guard"
    },
    {
        "w": "ጸጥ ያለ",
        "translation": "silent"
    },
    {
        "w": "ውጤት",
        "translation": "effect"
    },
    {
        "w": "ጥላ",
        "translation": "shadow"
    },
    {
        "w": "ለመዘመር",
        "translation": "to sing"
    },
    {
        "w": "ሻንጣ",
        "translation": "bag"
    },
    {
        "w": "ለማረጋገጥ",
        "translation": "to prove"
    },
    {
        "w": "ፈረንሳይኛ",
        "translation": "French"
    },
    {
        "w": "ቁመት",
        "translation": "tall"
    },
    {
        "w": "በታች",
        "translation": "beneath"
    },
    {
        "w": "መፈለግ",
        "translation": "to seek"
    },
    {
        "w": "ምንም",
        "translation": "none"
    },
    {
        "w": "ወደ ሩጫ",
        "translation": "to rush"
    },
    {
        "w": "ተራራ",
        "translation": "mountain"
    },
    {
        "w": "ማዘጋጀት",
        "translation": "to prepare"
    },
    {
        "w": "ወታደር",
        "translation": "soldier"
    },
    {
        "w": "በጭራሽ",
        "translation": "hardly"
    },
    {
        "w": "አሞሌ",
        "translation": "bar"
    },
    {
        "w": "ለማማረር",
        "translation": "to grin"
    },
    {
        "w": "ታሪክ",
        "translation": "history"
    },
    {
        "w": "ንጹህ",
        "translation": "clean"
    },
    {
        "w": "ለመሸጥ",
        "translation": "to sell"
    },
    {
        "w": "ጋብቻ",
        "translation": "marriage"
    },
    {
        "w": "ድርጊት",
        "translation": "action"
    },
    {
        "w": "መንደር",
        "translation": "village"
    },
    {
        "w": "አባል",
        "translation": "member"
    },
    {
        "w": "የወደፊት",
        "translation": "future"
    },
    {
        "w": "ኮረብታ",
        "translation": "hill"
    },
    {
        "w": "በተለይ",
        "translation": "especially"
    },
    {
        "w": "መናፈሻ",
        "translation": "garden"
    },
    {
        "w": "ጣፋጭ",
        "translation": "sweet"
    },
    {
        "w": "ዝናብ",
        "translation": "rain"
    },
    {
        "w": "ቁምፊ",
        "translation": "character"
    },
    {
        "w": "መጓጓዝ",
        "translation": "to travel"
    },
    {
        "w": "ጥቃት",
        "translation": "attack"
    },
    {
        "w": "ለመዝጋት",
        "translation": "to shut"
    },
    {
        "w": "ጭስ",
        "translation": "smoke"
    },
    {
        "w": "በጥንቃቄ",
        "translation": "safe"
    },
    {
        "w": "ቦታ",
        "translation": "space"
    },
    {
        "w": "አካባቢ",
        "translation": "area"
    },
    {
        "w": "ከታች",
        "translation": "below"
    },
    {
        "w": "ሁኔታ",
        "translation": "situation"
    },
    {
        "w": "ሊታሰብበት",
        "translation": "to regard"
    },
    {
        "w": "ለመቃወም",
        "translation": "to refuse"
    },
    {
        "w": "ሰላሳ",
        "translation": "thirty"
    },
    {
        "w": "ደረቅ",
        "translation": "dry"
    },
    {
        "w": "ለመዝለል",
        "translation": "to jump"
    },
    {
        "w": "ለመድገም",
        "translation": "to repeat"
    },
    {
        "w": "የዱር",
        "translation": "wild"
    },
    {
        "w": "ለመቆለፍ",
        "translation": "to lock"
    },
    {
        "w": "እንግሊዝ",
        "translation": "England"
    },
    {
        "w": "ስነ ጥበብ",
        "translation": "art"
    },
    {
        "w": "ወደፊት",
        "translation": "ahead"
    },
    {
        "w": "ሶስተኛ",
        "translation": "third"
    },
    {
        "w": "ፈጣን",
        "translation": "quick"
    },
    {
        "w": "ሸሚዝ",
        "translation": "shirt"
    },
    {
        "w": "ለማሸነፍ",
        "translation": "to win"
    },
    {
        "w": "አፍንጫ",
        "translation": "nose"
    },
    {
        "w": "በበጋ",
        "translation": "summer"
    },
    {
        "w": "ጉሮሮ",
        "translation": "throat"
    },
    {
        "w": "ጥረት",
        "translation": "effort"
    },
    {
        "w": "ቀላል",
        "translation": "simple"
    },
    {
        "w": "ቃል",
        "translation": "term"
    },
    {
        "w": "ማስተማር",
        "translation": "to teach"
    },
    {
        "w": "ዘር",
        "translation": "race"
    },
    {
        "w": "ቀርፋፋ",
        "translation": "slow"
    },
    {
        "w": "ሃላፊነት",
        "translation": "duty"
    },
    {
        "w": "ሙዚቃ",
        "translation": "music"
    },
    {
        "w": "ሕንዳዊ",
        "translation": "Indian"
    },
    {
        "w": "ክስተት",
        "translation": "event"
    },
    {
        "w": "አበባ",
        "translation": "flower"
    },
    {
        "w": "ለማመልከት",
        "translation": "to mark"
    },
    {
        "w": "ወፍ",
        "translation": "bird"
    },
    {
        "w": "መሰብሰብ",
        "translation": "to gather"
    },
    {
        "w": "አቶ",
        "translation": "Mr"
    },
    {
        "w": "ፍርድ ቤት",
        "translation": "court"
    },
    {
        "w": "ስብሰባ",
        "translation": "meeting"
    },
    {
        "w": "ለመጮህ",
        "translation": "to scream"
    },
    {
        "w": "ኳስ",
        "translation": "hat"
    },
    {
        "w": "መውደቅ",
        "translation": "to fail"
    },
    {
        "w": "ለመንጠላጠል",
        "translation": "to climb"
    },
    {
        "w": "ግድያ",
        "translation": "murder"
    },
    {
        "w": "ለመሙላት",
        "translation": "to fit"
    },
    {
        "w": "አይሆንም",
        "translation": "neither"
    },
    {
        "w": "ቀጭን",
        "translation": "thin"
    },
    {
        "w": "ውጤት",
        "translation": "result"
    },
    {
        "w": "ለመሞከር",
        "translation": "to hurry"
    },
    {
        "w": "ተጠናቀቀ",
        "translation": "complete"
    },
    {
        "w": "ጥርስ",
        "translation": "tooth"
    },
    {
        "w": "ለማሰር",
        "translation": "to tie"
    },
    {
        "w": "ዓላማ",
        "translation": "purpose"
    },
    {
        "w": "ገጽ",
        "translation": "page"
    },
    {
        "w": "ስለዚህ",
        "translation": "thus"
    },
    {
        "w": "ክርክር",
        "translation": "suit"
    },
    {
        "w": "ጠላት",
        "translation": "enemy"
    },
    {
        "w": "አመት",
        "translation": "century"
    },
    {
        "w": "መታገል",
        "translation": "to struggle"
    },
    {
        "w": "የተለመደው",
        "translation": "usual"
    },
    {
        "w": "ነገር",
        "translation": "object"
    },
    {
        "w": "ለማንቃት",
        "translation": "to wake"
    },
    {
        "w": "ሀብታም",
        "translation": "rich"
    },
    {
        "w": "የይገባኛል ጥያቄ",
        "translation": "to claim"
    },
    {
        "w": "ፍትሃዊ",
        "translation": "fair"
    },
    {
        "w": "የተለመደ",
        "translation": "common"
    },
    {
        "w": "ጥንካሬ",
        "translation": "strength"
    },
    {
        "w": "ወፍራም",
        "translation": "thick"
    },
    {
        "w": "ነገሮች",
        "translation": "stuff"
    },
    {
        "w": "አክብሮት",
        "translation": "respect"
    },
    {
        "w": "ማስገንዘብ",
        "translation": "to address"
    },
    {
        "w": "ኑሮ",
        "translation": "living"
    },
    {
        "w": "ሰባት",
        "translation": "seven"
    },
    {
        "w": "ማወቅ",
        "translation": "to recognize"
    },
    {
        "w": "መደረግ ያለበት",
        "translation": "to ought"
    },
    {
        "w": "ለመርዳት",
        "translation": "to support"
    },
    {
        "w": "ለመያዝ",
        "translation": "to grab"
    },
    {
        "w": "ብናማ",
        "translation": "brown"
    },
    {
        "w": "ትዕዛዝ",
        "translation": "command"
    },
    {
        "w": "መገኘት",
        "translation": "presence"
    },
    {
        "w": "ለመግለጽ",
        "translation": "to describe"
    },
    {
        "w": "ቀሚስ",
        "translation": "coat"
    },
    {
        "w": "መሣፈሪያ",
        "translation": "station"
    },
    {
        "w": "አስፈላጊ ናቸው",
        "translation": "necessary"
    },
    {
        "w": "መስመጥ",
        "translation": "to sink"
    },
    {
        "w": "ባንክ",
        "translation": "bank"
    },
    {
        "w": "ለማራገፍ",
        "translation": "to stretch"
    },
    {
        "w": "ፍጹም",
        "translation": "perfect"
    },
    {
        "w": "መከራን መቀበል ነው",
        "translation": "to suffer"
    },
    {
        "w": "ድንገተኛ",
        "translation": "sudden"
    },
    {
        "w": "ለመጥፋት",
        "translation": "to disappear"
    },
    {
        "w": "ስምት",
        "translation": "eight"
    },
    {
        "w": "ዱካ",
        "translation": "path"
    },
    {
        "w": "በተለይ",
        "translation": "particular"
    },
    {
        "w": "ማስፋፋት",
        "translation": "to spread"
    },
    {
        "w": "ጨለማ",
        "translation": "darkness"
    },
    {
        "w": "መወጣጫ",
        "translation": "stair"
    },
    {
        "w": "ለማመስገን",
        "translation": "to thank"
    },
    {
        "w": "እንቅስቃሴ",
        "translation": "movement"
    },
    {
        "w": "አስቸጋሪ",
        "translation": "difficult"
    },
    {
        "w": "ሱቅ",
        "translation": "shop"
    },
    {
        "w": "አረንጓዴ",
        "translation": "pale"
    },
    {
        "w": "ለመተዳደር",
        "translation": "to belong"
    },
    {
        "w": "ቋንቋ",
        "translation": "language"
    },
    {
        "w": "ልዩ",
        "translation": "special"
    },
    {
        "w": "ከባድ",
        "translation": "serious"
    },
    {
        "w": "ለማስታወስ",
        "translation": "to remind"
    },
    {
        "w": "ለማቅረብ",
        "translation": "to provide"
    },
    {
        "w": "ጠባብ",
        "translation": "narrow"
    },
    {
        "w": "ሁኔታ",
        "translation": "condition"
    },
    {
        "w": "ማጠፍ",
        "translation": "to bend"
    },
    {
        "w": "ኮከብ",
        "translation": "star"
    },
    {
        "w": "ጠርሙስ",
        "translation": "bottle"
    },
    {
        "w": "በሕይወት",
        "translation": "alive"
    },
    {
        "w": "ቁልፍ",
        "translation": "key"
    },
    {
        "w": "ማሽከርከር",
        "translation": "to swing"
    },
    {
        "w": "ጮክ ብሎ",
        "translation": "loud"
    },
    {
        "w": "በፀጥታ",
        "translation": "quietly"
    },
    {
        "w": "ስህተት",
        "translation": "mistake"
    },
    {
        "w": "ለመመልከት",
        "translation": "to observe"
    },
    {
        "w": "ለማለት ይቻላል",
        "translation": "to remark"
    },
    {
        "w": "ውበት",
        "translation": "beauty"
    },
    {
        "w": "በጥንቃቄ",
        "translation": "carefully"
    },
    {
        "w": "በር",
        "translation": "gate"
    },
    {
        "w": "ለማንሳት",
        "translation": "to knock"
    },
    {
        "w": "ወደ ተንሸራታች",
        "translation": "to slide"
    },
    {
        "w": "ተገንዝቦ",
        "translation": "aware"
    },
    {
        "w": "ለማስወገድ",
        "translation": "to remove"
    },
    {
        "w": "ሙሉ በሙሉ",
        "translation": "completely"
    },
    {
        "w": "ለመደፍዘዝ",
        "translation": "to dare"
    },
    {
        "w": "አገልጋይ",
        "translation": "servant"
    },
    {
        "w": "ለማጎርመስ",
        "translation": "to bow"
    },
    {
        "w": "ክብ",
        "translation": "circle"
    },
    {
        "w": "መዝገብ",
        "translation": "record"
    },
    {
        "w": "ሻይ",
        "translation": "tea"
    },
    {
        "w": "ቁጣ",
        "translation": "angry"
    },
    {
        "w": "የግል",
        "translation": "personal"
    },
    {
        "w": "ደመና",
        "translation": "cloud"
    },
    {
        "w": "ደንብ",
        "translation": "rule"
    },
    {
        "w": "ውጊያ",
        "translation": "battle"
    },
    {
        "w": "ሰሌዳ",
        "translation": "board"
    },
    {
        "w": "የግል",
        "translation": "private"
    },
    {
        "w": "ቁስል",
        "translation": "wound"
    },
    {
        "w": "ተፈጥሯዊ",
        "translation": "natural"
    },
    {
        "w": "አንድ ቦታ",
        "translation": "somewhere"
    },
    {
        "w": "ውጭ",
        "translation": "forth"
    },
    {
        "w": "ጣዕም",
        "translation": "taste"
    },
    {
        "w": "ለማስተካከል",
        "translation": "to fix"
    },
    {
        "w": "በቀላሉ",
        "translation": "easily"
    },
    {
        "w": "ለማንኛውም",
        "translation": "anyway"
    },
    {
        "w": "ፍጥረት",
        "translation": "creature"
    },
    {
        "w": "ርዝመት",
        "translation": "length"
    },
    {
        "w": "ሱቅ",
        "translation": "store"
    },
    {
        "w": "አዲስ",
        "translation": "fresh"
    },
    {
        "w": "ወይን",
        "translation": "wine"
    },
    {
        "w": "አፓርታማ",
        "translation": "apartment"
    },
    {
        "w": "አጋጣሚ",
        "translation": "occasion"
    },
    {
        "w": "ምስል",
        "translation": "image"
    },
    {
        "w": "ስርዓት",
        "translation": "system"
    },
    {
        "w": "ዳኛ",
        "translation": "judge"
    },
    {
        "w": "ምላስ",
        "translation": "tongue"
    },
    {
        "w": "ፓውንድ",
        "translation": "pound"
    },
    {
        "w": "ኩባያ",
        "translation": "cup"
    },
    {
        "w": "ለመፍጠር",
        "translation": "to create"
    },
    {
        "w": "ቅርፅ",
        "translation": "shape"
    },
    {
        "w": "ዋጋ ያለው",
        "translation": "worth"
    },
    {
        "w": "ዘፈን",
        "translation": "song"
    },
    {
        "w": "ለማምረት",
        "translation": "to produce"
    },
    {
        "w": "ዛሬ ማታ",
        "translation": "tonight"
    },
    {
        "w": "ታመመ",
        "translation": "ill"
    },
    {
        "w": "በረዶ",
        "translation": "snow"
    },
    {
        "w": "ደረጃ",
        "translation": "level"
    },
    {
        "w": "ሞኝ",
        "translation": "fool"
    },
    {
        "w": "ስለዚህ",
        "translation": "therefore"
    },
    {
        "w": "ለመቁጠር",
        "translation": "to count"
    },
    {
        "w": "ታማሚ",
        "translation": "sick"
    },
    {
        "w": "ማህበራዊ",
        "translation": "social"
    },
    {
        "w": "ነገ",
        "translation": "tomorrow"
    },
    {
        "w": "ዝርዝር",
        "translation": "detail"
    },
    {
        "w": "አመለካከት",
        "translation": "opinion"
    },
    {
        "w": "ማባረር",
        "translation": "to shrug"
    },
    {
        "w": "ለማሳተፍ",
        "translation": "to involve"
    },
    {
        "w": "ዶላር",
        "translation": "dollar"
    },
    {
        "w": "ግዙፍ",
        "translation": "huge"
    },
    {
        "w": "መቅዳት",
        "translation": "to pour"
    },
    {
        "w": "ጥሩ",
        "translation": "cool"
    },
    {
        "w": "ጡት",
        "translation": "breast"
    },
    {
        "w": "መጎተት",
        "translation": "to tire"
    },
    {
        "w": "ትንሽ",
        "translation": "slightly"
    },
    {
        "w": "ካምፕ",
        "translation": "camp"
    },
    {
        "w": "ለምሳሌ",
        "translation": "example"
    },
    {
        "w": "ጉዞ",
        "translation": "trip"
    },
    {
        "w": "ሆቴል",
        "translation": "hotel"
    },
    {
        "w": "ጥንድ",
        "translation": "pair"
    },
    {
        "w": "ታሪክ",
        "translation": "tale"
    },
    {
        "w": "ለማብራት",
        "translation": "to flash"
    },
    {
        "w": "ሊሆን ይችላል",
        "translation": "likely"
    },
    {
        "w": "ብዙ ጊዜ",
        "translation": "usually"
    },
    {
        "w": "የማይቻል",
        "translation": "impossible"
    },
    {
        "w": "አስከፊ",
        "translation": "terrible"
    },
    {
        "w": "ማህበረሰብ",
        "translation": "society"
    },
    {
        "w": "ለመስረቅ",
        "translation": "to steal"
    },
    {
        "w": "ሰላም",
        "translation": "peace"
    },
    {
        "w": "መልዕክት",
        "translation": "message"
    },
    {
        "w": "መኝታ ቤት",
        "translation": "bedroom"
    },
    {
        "w": "ጉዳይ",
        "translation": "affair"
    },
    {
        "w": "እንዲከሰት",
        "translation": "to occur"
    },
    {
        "w": "ለመጠየቅ",
        "translation": "to require"
    },
    {
        "w": "ጫማ",
        "translation": "shoe"
    },
    {
        "w": "ማለም, መፈለግ",
        "translation": "to intend"
    },
    {
        "w": "ሙቀት",
        "translation": "heat"
    },
    {
        "w": "ቀለም",
        "translation": "color"
    },
    {
        "w": "ሠራዊት",
        "translation": "army"
    },
    {
        "w": "እንግዳ",
        "translation": "stranger"
    },
    {
        "w": "ስራ የሚበዛበት",
        "translation": "busy"
    },
    {
        "w": "ግራጫ",
        "translation": "gray"
    },
    {
        "w": "ጀርመንኛ",
        "translation": "German"
    },
    {
        "w": "ማካተት አለበት",
        "translation": "to contain"
    },
    {
        "w": "ቢጫ",
        "translation": "yellow"
    },
    {
        "w": "ካርድ",
        "translation": "card"
    },
    {
        "w": "ጥፍሮች",
        "translation": "sharp"
    },
    {
        "w": "ሊታከም ይችላል",
        "translation": "to treat"
    },
    {
        "w": "ጸጥ አለ",
        "translation": "calm"
    },
    {
        "w": "ኳስ",
        "translation": "ball"
    },
    {
        "w": "ታች",
        "translation": "bottom"
    },
    {
        "w": "አደጋ",
        "translation": "danger"
    },
    {
        "w": "በሙሉ",
        "translation": "entire"
    },
    {
        "w": "ማወቅ",
        "translation": "to determine"
    },
    {
        "w": "ብቻ",
        "translation": "merely"
    },
    {
        "w": "ዓሳ",
        "translation": "fish"
    },
    {
        "w": "ዋና",
        "translation": "main"
    },
    {
        "w": "ለመቀባት",
        "translation": "to paint"
    },
    {
        "w": "ለመውሰድ",
        "translation": "to cast"
    },
    {
        "w": "ደራሲ",
        "translation": "author"
    },
    {
        "w": "ጫጫታ",
        "translation": "noise"
    },
    {
        "w": "ቁጣ",
        "translation": "anger"
    },
    {
        "w": "ልዩነት",
        "translation": "difference"
    },
    {
        "w": "እንግዳ",
        "translation": "guest"
    },
    {
        "w": "ሊጠራጠር ይችላል",
        "translation": "to suspect"
    },
    {
        "w": "አስደንጋጭ",
        "translation": "shock"
    },
    {
        "w": "ተኩስ",
        "translation": "shot"
    },
    {
        "w": "አለቃ",
        "translation": "chief"
    },
    {
        "w": "ብርሃን",
        "translation": "to shine"
    },
    {
        "w": "ለማጠብ",
        "translation": "to wash"
    },
    {
        "w": "ለመተንፈስ",
        "translation": "to breathe"
    },
    {
        "w": "መንግሥት",
        "translation": "government"
    },
    {
        "w": "ማስወገድ",
        "translation": "to avoid"
    },
    {
        "w": "ደረጃ",
        "translation": "stage"
    },
    {
        "w": "ሃምሳ",
        "translation": "fifty"
    },
    {
        "w": "ጉድጓድ",
        "translation": "hole"
    },
    {
        "w": "ጸሐፊ",
        "translation": "writer"
    },
    {
        "w": "መበተን",
        "translation": "to burst"
    },
    {
        "w": "ምርጫ",
        "translation": "choice"
    },
    {
        "w": "ብር",
        "translation": "silver"
    },
    {
        "w": "ለማለት",
        "translation": "to exclaim"
    },
    {
        "w": "ተይብ",
        "translation": "type"
    },
    {
        "w": "በጣም ትንሽ",
        "translation": "tiny"
    },
    {
        "w": "ሣር",
        "translation": "grass"
    },
    {
        "w": "ለመምራት",
        "translation": "to direct"
    },
    {
        "w": "ገጽታ",
        "translation": "appearance"
    },
    {
        "w": "አሜሪካ",
        "translation": "America"
    },
    {
        "w": "ግሩም",
        "translation": "wonderful"
    },
    {
        "w": "ለመሸከም",
        "translation": "to pack"
    },
    {
        "w": "ሆስፒታል",
        "translation": "hospital"
    },
    {
        "w": "እሷ",
        "translation": "hers"
    },
    {
        "w": "ቀስ ብሎ",
        "translation": "gently"
    },
    {
        "w": "ረጋ ያለ",
        "translation": "softly"
    },
    {
        "w": "ትራክ",
        "translation": "track"
    },
    {
        "w": "ማስረጃ",
        "translation": "evidence"
    },
    {
        "w": "ክፉ",
        "translation": "evil"
    },
    {
        "w": "ለመገለጥ",
        "translation": "to reveal"
    },
    {
        "w": "ለመኖር",
        "translation": "to exist"
    },
    {
        "w": "ለመጎተት",
        "translation": "to drag"
    },
    {
        "w": "መጸለይ",
        "translation": "to pray"
    },
    {
        "w": "እውቀት",
        "translation": "knowledge"
    },
    {
        "w": "ለመግለጽ",
        "translation": "to express"
    },
    {
        "w": "ጎን ለጎን",
        "translation": "aside"
    },
    {
        "w": "ክረምት",
        "translation": "winter"
    },
    {
        "w": "የሚታወቅ",
        "translation": "familiar"
    },
    {
        "w": "አምላክ",
        "translation": "god"
    },
    {
        "w": "ክፍለ ጊዜ",
        "translation": "period"
    },
    {
        "w": "አግድ",
        "translation": "block"
    },
    {
        "w": "ግልጽ",
        "translation": "clearly"
    },
    {
        "w": "ማጉረምረም",
        "translation": "to murmur"
    },
    {
        "w": "ፖስት",
        "translation": "post"
    },
    {
        "w": "ዥረት",
        "translation": "stream"
    },
    {
        "w": "ሁኔታ",
        "translation": "circumstance"
    },
    {
        "w": "መገደብ",
        "translation": "to insist"
    },
    {
        "w": "ሩብ",
        "translation": "quarter"
    },
    {
        "w": "አእምሮ",
        "translation": "brain"
    },
    {
        "w": "ግልጽ",
        "translation": "plain"
    },
    {
        "w": "ስፋት",
        "translation": "flat"
    },
    {
        "w": "ርዕሰ ጉዳይ",
        "translation": "issue"
    },
    {
        "w": "ቤዝ",
        "translation": "base"
    },
    {
        "w": "ደስታ",
        "translation": "delight"
    },
    {
        "w": "ደሴት",
        "translation": "island"
    },
    {
        "w": "ዕድል",
        "translation": "opportunity"
    },
    {
        "w": "ተክል",
        "translation": "plant"
    },
    {
        "w": "ደስታ",
        "translation": "joy"
    },
    {
        "w": "ለመቀየር",
        "translation": "to shift"
    },
    {
        "w": "ግንኙነት",
        "translation": "relationship"
    },
    {
        "w": "ቢላዋ",
        "translation": "knife"
    },
    {
        "w": "ለማጥራት",
        "translation": "to brush"
    },
    {
        "w": "ትንሽ",
        "translation": "slight"
    },
    {
        "w": "ጉድለት",
        "translation": "damn"
    },
    {
        "w": "ለመንቀጥቀጥ",
        "translation": "to tremble"
    },
    {
        "w": "ለመወያየት",
        "translation": "to discuss"
    },
    {
        "w": "የተለያዩ",
        "translation": "various"
    },
    {
        "w": "እሴት",
        "translation": "value"
    },
    {
        "w": "መናፈሻ",
        "translation": "park"
    },
    {
        "w": "ወሲብ",
        "translation": "sex"
    },
    {
        "w": "የአካባቢው",
        "translation": "local"
    },
    {
        "w": "ወጣት",
        "translation": "youth"
    },
    {
        "w": "ልምምድ",
        "translation": "practice"
    },
    {
        "w": "እርጥብ",
        "translation": "wet"
    },
    {
        "w": "ቁርስ",
        "translation": "breakfast"
    },
    {
        "w": "ካፒቴን",
        "translation": "captain"
    },
    {
        "w": "ማጥፋት",
        "translation": "to destroy"
    },
    {
        "w": "ጉዞ",
        "translation": "journey"
    },
    {
        "w": "እሁድ",
        "translation": "Sunday"
    },
    {
        "w": "የሆነ ሆኖ",
        "translation": "somehow"
    },
    {
        "w": "ለማፍረስ",
        "translation": "to frown"
    },
    {
        "w": "ለመጠቅለል",
        "translation": "to wrap"
    },
    {
        "w": "ድመት",
        "translation": "cat"
    },
    {
        "w": "ታስሯል",
        "translation": "bound"
    },
    {
        "w": "ማጽናኛ",
        "translation": "comfort"
    },
    {
        "w": "የእጅ ምልክት",
        "translation": "gesture"
    },
    {
        "w": "ቄስ",
        "translation": "priest"
    },
    {
        "w": "ፈረንሳይ",
        "translation": "France"
    },
    {
        "w": "መቆጣጠር",
        "translation": "to handle"
    },
    {
        "w": "መንግሥተ ሰማያት",
        "translation": "heaven"
    },
    {
        "w": "ምስክር",
        "translation": "witness"
    },
    {
        "w": "መጨመር",
        "translation": "to increase"
    },
    {
        "w": "ባህሪ",
        "translation": "feature"
    },
    {
        "w": "ለመለጋት",
        "translation": "to kick"
    },
    {
        "w": "ለመገመት",
        "translation": "to assume"
    },
    {
        "w": "እንቅልፍ",
        "translation": "asleep"
    },
    {
        "w": "ለማስታወስ",
        "translation": "to recall"
    },
    {
        "w": "ግጥሚያ",
        "translation": "match"
    },
    {
        "w": "ጥብቅ",
        "translation": "tight"
    },
    {
        "w": "ጫካ",
        "translation": "forest"
    },
    {
        "w": "ለመጠበቅ",
        "translation": "to protect"
    },
    {
        "w": "አጥረት",
        "translation": "lack"
    },
    {
        "w": "ጓደኛ",
        "translation": "companion"
    },
    {
        "w": "ሙሉ በሙሉ",
        "translation": "entirely"
    },
    {
        "w": "ውሳኔ",
        "translation": "decision"
    },
    {
        "w": "ለማካተት",
        "translation": "to include"
    },
    {
        "w": "ዱካ",
        "translation": "trail"
    },
    {
        "w": "ለመጋበዝ",
        "translation": "to invite"
    },
    {
        "w": "ስሜት",
        "translation": "emotion"
    },
    {
        "w": "አጥንት",
        "translation": "bone"
    },
    {
        "w": "ከሰዓት በኋላ",
        "translation": "o’clock"
    },
    {
        "w": "ለመከበብ",
        "translation": "to surround"
    },
    {
        "w": "የመጨረሻ",
        "translation": "final"
    },
    {
        "w": "ገጽታ",
        "translation": "surface"
    },
    {
        "w": "ዐስራ ሁለት",
        "translation": "dozen"
    },
    {
        "w": "ለማወጅ",
        "translation": "to declare"
    },
    {
        "w": "መሣሪያ",
        "translation": "weapon"
    },
    {
        "w": "ማዕከላዊ",
        "translation": "center"
    },
    {
        "w": "እንኳን ደህና መጣህ",
        "translation": "welcome"
    },
    {
        "w": "ወንጀል",
        "translation": "crime"
    },
    {
        "w": "ክብደት",
        "translation": "weight"
    },
    {
        "w": "ወዳጆች",
        "translation": "lover"
    },
    {
        "w": "ሰይፍ",
        "translation": "sword"
    },
    {
        "w": "ዝርዝር",
        "translation": "list"
    },
    {
        "w": "ቀን",
        "translation": "date"
    },
    {
        "w": "ለመታደም",
        "translation": "to attend"
    },
    {
        "w": "ንግግር",
        "translation": "speech"
    },
    {
        "w": "ክርስቲያን",
        "translation": "Christian"
    },
    {
        "w": "ለማረጋገጥ",
        "translation": "to assure"
    },
    {
        "w": "መነቃቃት",
        "translation": "to snap"
    },
    {
        "w": "እንቅስቃሴ",
        "translation": "motion"
    },
    {
        "w": "ፍቅር",
        "translation": "passion"
    },
    {
        "w": "ወደፊት ለመራመድ",
        "translation": "to advance"
    },
    {
        "w": "ምክንያት",
        "translation": "sake"
    },
    {
        "w": "ተጽዕኖ",
        "translation": "influence"
    },
    {
        "w": "ካልሆነ",
        "translation": "unless"
    },
    {
        "w": "ፍጥነት",
        "translation": "speed"
    },
    {
        "w": "ሕዝብ",
        "translation": "folk"
    },
    {
        "w": "አውሎ ነፋስ",
        "translation": "storm"
    },
    {
        "w": "ጨረቃ",
        "translation": "moon"
    },
    {
        "w": "ማብላት",
        "translation": "to feed"
    },
    {
        "w": "የፖለቲካ",
        "translation": "political"
    },
    {
        "w": "ለመለመን",
        "translation": "to beg"
    },
    {
        "w": "ተስማማ",
        "translation": "to accord"
    },
    {
        "w": "ማሽን",
        "translation": "machine"
    },
    {
        "w": "አርባ",
        "translation": "forty"
    },
    {
        "w": "ዘጠኝ",
        "translation": "nine"
    },
    {
        "w": "እንዲለቀቅ",
        "translation": "to release"
    },
    {
        "w": "ሰሜን",
        "translation": "north"
    },
    {
        "w": "አጎት",
        "translation": "uncle"
    },
    {
        "w": "ጥንታዊ",
        "translation": "ancient"
    },
    {
        "w": "የተከፋ",
        "translation": "sad"
    },
    {
        "w": "ብሪታንያ",
        "translation": "British"
    },
    {
        "w": "ደካማ",
        "translation": "faint"
    },
    {
        "w": "ድርብ",
        "translation": "double"
    },
    {
        "w": "መቃብር",
        "translation": "grave"
    },
    {
        "w": "ምሳ",
        "translation": "lunch"
    },
    {
        "w": "ፈጣን",
        "translation": "instant"
    },
    {
        "w": "ሳህን",
        "translation": "plate"
    },
    {
        "w": "መቀበር",
        "translation": "to bury"
    },
    {
        "w": "በትክክል",
        "translation": "perfectly"
    },
    {
        "w": "ቆንጆ",
        "translation": "lovely"
    },
    {
        "w": "የእርስዎ",
        "translation": "yours"
    },
    {
        "w": "በረዶ",
        "translation": "ice"
    },
    {
        "w": "ለመለየት",
        "translation": "to separate"
    },
    {
        "w": "ለመጥቀስ",
        "translation": "to bite"
    },
    {
        "w": "ጣራ",
        "translation": "roof"
    },
    {
        "w": "መማል",
        "translation": "to swear"
    },
    {
        "w": "ኢንች",
        "translation": "inch"
    },
    {
        "w": "ሾፌር",
        "translation": "driver"
    },
    {
        "w": "መስታወት",
        "translation": "mirror"
    },
    {
        "w": "ሆድ",
        "translation": "stomach"
    },
    {
        "w": "መሆን",
        "translation": "being"
    },
    {
        "w": "ለማግኘት",
        "translation": "to gain"
    },
    {
        "w": "ችላ ማለትን",
        "translation": "to ignore"
    },
    {
        "w": "እሺ",
        "translation": "okay"
    },
    {
        "w": "ምላሽ ለመስጠት",
        "translation": "to respond"
    },
    {
        "w": "ማንም",
        "translation": "nobody"
    },
    {
        "w": "ተቃራኒ",
        "translation": "opposite"
    },
    {
        "w": "ማስቸገር",
        "translation": "to bother"
    },
    {
        "w": "ለማዘጋጀት",
        "translation": "to arrange"
    },
    {
        "w": "ማስነሻ",
        "translation": "boot"
    },
    {
        "w": "አቧራ",
        "translation": "dust"
    },
    {
        "w": "ለማጥፋት",
        "translation": "to rub"
    },
    {
        "w": "በቀጥታ",
        "translation": "directly"
    },
    {
        "w": "ብርሃን",
        "translation": "glow"
    },
    {
        "w": "መጮህ",
        "translation": "to yell"
    },
    {
        "w": "ግለሰብ",
        "translation": "individual"
    },
    {
        "w": "ነርስ",
        "translation": "nurse"
    },
    {
        "w": "ወይዘሮ",
        "translation": "Mrs"
    },
    {
        "w": "ራዕይ",
        "translation": "vision"
    },
    {
        "w": "እንዲባክን",
        "translation": "to waste"
    },
    {
        "w": "ኩራተኛ",
        "translation": "proud"
    },
    {
        "w": "እብድ",
        "translation": "mad"
    },
    {
        "w": "ሥልጣን",
        "translation": "authority"
    },
    {
        "w": "ግንኙነት",
        "translation": "contact"
    },
    {
        "w": "ጋዜጣ",
        "translation": "newspaper"
    },
    {
        "w": "ገና",
        "translation": "Christmas"
    },
    {
        "w": "አደጋ",
        "translation": "risk"
    },
    {
        "w": "በተለይ",
        "translation": "particularly"
    },
    {
        "w": "ዲግሪ",
        "translation": "degree"
    },
    {
        "w": "የቀድሞ",
        "translation": "former"
    },
    {
        "w": "በተወሰነ ደረጃ",
        "translation": "somewhat"
    },
    {
        "w": "ቅጥ",
        "translation": "style"
    },
    {
        "w": "አንድ ሰው",
        "translation": "somebody"
    },
    {
        "w": "መወረር ነው",
        "translation": "to possess"
    },
    {
        "w": "መኪና",
        "translation": "truck"
    },
    {
        "w": "አስደሳች",
        "translation": "interesting"
    },
    {
        "w": "ቀልድ",
        "translation": "joke"
    },
    {
        "w": "ለመጉዳት",
        "translation": "to mutter"
    },
    {
        "w": "ንብረት",
        "translation": "property"
    },
    {
        "w": "ገላ",
        "translation": "bare"
    },
    {
        "w": "ሥጋ",
        "translation": "flesh"
    },
    {
        "w": "እፎይታ",
        "translation": "relief"
    },
    {
        "w": "ለማመንታት",
        "translation": "to hesitate"
    },
    {
        "w": "ለማረፍ",
        "translation": "to ease"
    },
    {
        "w": "መያዣ",
        "translation": "grip"
    },
    {
        "w": "መራመድ",
        "translation": "to leap"
    },
    {
        "w": "አቅርቦት",
        "translation": "supply"
    },
    {
        "w": "ለማቋረጥ",
        "translation": "to interrupt"
    },
    {
        "w": "ምግብ",
        "translation": "meal"
    },
    {
        "w": "ያክስት",
        "translation": "cousin"
    },
    {
        "w": "ሂደት",
        "translation": "process"
    },
    {
        "w": "ሴት",
        "translation": "female"
    },
    {
        "w": "ኪሳራ",
        "translation": "loss"
    },
    {
        "w": "ሲጋራ",
        "translation": "cigarette"
    },
    {
        "w": "ብረት",
        "translation": "iron"
    },
    {
        "w": "ለማሳመን",
        "translation": "to convince"
    },
    {
        "w": "ተለያይቷል",
        "translation": "apart"
    },
    {
        "w": "ተወዳጅ",
        "translation": "fancy"
    },
    {
        "w": "ረድፍ",
        "translation": "row"
    },
    {
        "w": "ፍጥነት",
        "translation": "pace"
    },
    {
        "w": "ሁለት ግዜ",
        "translation": "twice"
    },
    {
        "w": "መፍሰስ",
        "translation": "to flow"
    },
    {
        "w": "ታካሚ",
        "translation": "patient"
    },
    {
        "w": "ለማስመሰል",
        "translation": "to pretend"
    },
    {
        "w": "መጠን",
        "translation": "size"
    },
    {
        "w": "እምብዛም አይደለም",
        "translation": "barely"
    },
    {
        "w": "ሰርግ",
        "translation": "wedding"
    },
    {
        "w": "ለማስታወቅ",
        "translation": "to announce"
    },
    {
        "w": "ሳቅ",
        "translation": "laughter"
    },
    {
        "w": "ሉህ",
        "translation": "sheet"
    },
    {
        "w": "ንድፍ",
        "translation": "design"
    },
    {
        "w": "ማብሰል",
        "translation": "to cook"
    },
    {
        "w": "የእርስዎ",
        "translation": "thy"
    },
    {
        "w": "መኪና",
        "translation": "wheel"
    },
    {
        "w": "ስኬት",
        "translation": "success"
    },
    {
        "w": "አደገኛ",
        "translation": "dangerous"
    },
    {
        "w": "ደቡብ",
        "translation": "south"
    },
    {
        "w": "ነቅቶ",
        "translation": "awake"
    },
    {
        "w": "እብጠት",
        "translation": "loose"
    },
    {
        "w": "ግንባር",
        "translation": "forehead"
    },
    {
        "w": "ሰፊ",
        "translation": "broad"
    },
    {
        "w": "በረሃ",
        "translation": "desert"
    },
    {
        "w": "ለማነሳሳት",
        "translation": "to stir"
    },
    {
        "w": "ድንገት",
        "translation": "stroke"
    },
    {
        "w": "ክንፍ",
        "translation": "wing"
    },
    {
        "w": "ማስጠንቀቅ",
        "translation": "to warn"
    },
    {
        "w": "ማበላሸት",
        "translation": "to fold"
    },
    {
        "w": "ክምር",
        "translation": "pile"
    },
    {
        "w": "ነበልባል",
        "translation": "flame"
    },
    {
        "w": "መግቢያ",
        "translation": "entrance"
    },
    {
        "w": "ጌታ",
        "translation": "lord"
    },
    {
        "w": "ለመጓዝ",
        "translation": "to sail"
    },
    {
        "w": "ለማስተዋወቅ",
        "translation": "to introduce"
    },
    {
        "w": "ለስላሳ",
        "translation": "smooth"
    },
    {
        "w": "ኃይለኛ",
        "translation": "powerful"
    },
    {
        "w": "ወጪ",
        "translation": "cost"
    },
    {
        "w": "ሚሊዮን",
        "translation": "million"
    },
    {
        "w": "እምነት",
        "translation": "faith"
    },
    {
        "w": "ለመዋጥ",
        "translation": "to swallow"
    },
    {
        "w": "ድልድይ",
        "translation": "bridge"
    },
    {
        "w": "ተማሪ",
        "translation": "student"
    },
    {
        "w": "መለካት",
        "translation": "measure"
    },
    {
        "w": "ዓይነ ስውር",
        "translation": "blind"
    },
    {
        "w": "ሁሉም ሰው",
        "translation": "everybody"
    },
    {
        "w": "ሀብት",
        "translation": "fortune"
    },
    {
        "w": "ቀነ ገደብ",
        "translation": "due"
    },
    {
        "w": "ረጋ ያለ",
        "translation": "gentle"
    },
    {
        "w": "ለመመርመር",
        "translation": "to examine"
    },
    {
        "w": "እብድ",
        "translation": "crazy"
    },
    {
        "w": "አዝናኝ",
        "translation": "fun"
    },
    {
        "w": "ኩራት",
        "translation": "pride"
    },
    {
        "w": "ወንድ",
        "translation": "male"
    },
    {
        "w": "ለመሳተፍ",
        "translation": "to engage"
    },
    {
        "w": "ሞክር",
        "translation": "test"
    },
    {
        "w": "ክፈፍ",
        "translation": "frame"
    },
    {
        "w": "እውነታ",
        "translation": "reality"
    },
    {
        "w": "ተገቢ",
        "translation": "proper"
    },
    {
        "w": "ለማንጸባረቅ",
        "translation": "to reflect"
    },
    {
        "w": "መጓዝ",
        "translation": "to wander"
    },
    {
        "w": "ለመወከል",
        "translation": "to represent"
    },
    {
        "w": "እርሻ",
        "translation": "farm"
    },
    {
        "w": "ቡድን",
        "translation": "team"
    },
    {
        "w": "የአየር ሁኔታ",
        "translation": "weather"
    },
    {
        "w": "ለማሟላት",
        "translation": "to satisfy"
    },
    {
        "w": "ችግር",
        "translation": "difficulty"
    },
    {
        "w": "ደካማ",
        "translation": "weak"
    },
    {
        "w": "ትርጉም",
        "translation": "meaning"
    },
    {
        "w": "በረራ",
        "translation": "flight"
    },
    {
        "w": "ደስ ይላል",
        "translation": "pleasant"
    },
    {
        "w": "የመርከብ",
        "translation": "deck"
    },
    {
        "w": "በተጠንቀቅ",
        "translation": "careful"
    },
    {
        "w": "ካሬ",
        "translation": "square"
    },
    {
        "w": "ይቅርታ",
        "translation": "excuse"
    },
    {
        "w": "ጥብቅ",
        "translation": "firm"
    },
    {
        "w": "ቅርንጫፍ",
        "translation": "branch"
    },
    {
        "w": "ለማጽዳት",
        "translation": "to wipe"
    },
    {
        "w": "ዋጋ",
        "translation": "price"
    },
    {
        "w": "የመጀመሪያው",
        "translation": "original"
    },
    {
        "w": "አስራ ሁለት",
        "translation": "twelve"
    },
    {
        "w": "ነገረፈጅ",
        "translation": "lawyer"
    },
    {
        "w": "ዱካ",
        "translation": "trace"
    },
    {
        "w": "ጸሎት",
        "translation": "prayer"
    },
    {
        "w": "ለማንኛውም",
        "translation": "anybody"
    },
    {
        "w": "ክብር",
        "translation": "honor"
    },
    {
        "w": "ደወል",
        "translation": "bell"
    },
    {
        "w": "ስጦታ",
        "translation": "gift"
    },
    {
        "w": "ክርስቶስ",
        "translation": "Christ"
    },
    {
        "w": "ኃይል",
        "translation": "energy"
    },
    {
        "w": "ሊሆን ይችላል",
        "translation": "possibly"
    },
    {
        "w": "ልማድ",
        "translation": "habit"
    },
    {
        "w": "ፈቃደኛ",
        "translation": "willing"
    },
    {
        "w": "ጥራት",
        "translation": "quality"
    },
    {
        "w": "ለማንሳት",
        "translation": "to toss"
    },
    {
        "w": "ስህተት",
        "translation": "fault"
    },
    {
        "w": "ዝቅ ለማድረግ",
        "translation": "to lower"
    },
    {
        "w": "በእርግጥ",
        "translation": "surely"
    },
    {
        "w": "ግልጽ ይመስላል",
        "translation": "apparently"
    },
    {
        "w": "ለመከራከር",
        "translation": "to argue"
    },
    {
        "w": "በመጀመር ላይ",
        "translation": "beginning"
    },
    {
        "w": "ውብ",
        "translation": "handsome"
    },
    {
        "w": "በጥልቀት",
        "translation": "deeply"
    },
    {
        "w": "መውቀስ",
        "translation": "to blame"
    },
    {
        "w": "ለመቃወም",
        "translation": "to protest"
    },
    {
        "w": "እስረኛ",
        "translation": "prisoner"
    },
    {
        "w": "ለማመልከት",
        "translation": "to indicate"
    },
    {
        "w": "አንተ",
        "translation": "thee"
    },
    {
        "w": "መዞር",
        "translation": "to twist"
    },
    {
        "w": "ጃኬት",
        "translation": "jacket"
    },
    {
        "w": "ጀግና",
        "translation": "hero"
    },
    {
        "w": "ዕድል",
        "translation": "luck"
    },
    {
        "w": "ይዘት",
        "translation": "content"
    },
    {
        "w": "ለማሳወቅ",
        "translation": "to inform"
    },
    {
        "w": "ለመከላከል",
        "translation": "to prevent"
    },
    {
        "w": "ደስታ",
        "translation": "happiness"
    },
    {
        "w": "በእውነት",
        "translation": "truly"
    },
    {
        "w": "ማበልፀግ",
        "translation": "to develop"
    },
    {
        "w": "እጀተኛ",
        "translation": "chin"
    },
    {
        "w": "ለማውደም",
        "translation": "to ruin"
    },
    {
        "w": "ለመበተን",
        "translation": "to crack"
    },
    {
        "w": "መሪ",
        "translation": "leader"
    },
    {
        "w": "ትላንትና",
        "translation": "yesterday"
    },
    {
        "w": "አስራ አምስት",
        "translation": "fifteen"
    },
    {
        "w": "የእንጨት",
        "translation": "wooden"
    },
    {
        "w": "ለማድረስ",
        "translation": "to deliver"
    },
    {
        "w": "ወኪል",
        "translation": "agent"
    },
    {
        "w": "ቁሳቁስ",
        "translation": "material"
    },
    {
        "w": "ምላሽ",
        "translation": "response"
    },
    {
        "w": "አንቀጽ",
        "translation": "passage"
    },
    {
        "w": "ደደብ",
        "translation": "stupid"
    },
    {
        "w": "ፋሽን",
        "translation": "fashion"
    },
    {
        "w": "ተግባር",
        "translation": "task"
    },
    {
        "w": "የማወቅ ጉጉት",
        "translation": "curious"
    },
    {
        "w": "ስኬታማ መሆን",
        "translation": "to succeed"
    },
    {
        "w": "ጥበበኛ",
        "translation": "wise"
    },
    {
        "w": "መጠን",
        "translation": "amount"
    },
    {
        "w": "ስልክ",
        "translation": "telephone"
    },
    {
        "w": "መከልከል",
        "translation": "to deny"
    },
    {
        "w": "ለመቆፈር",
        "translation": "to dig"
    },
    {
        "w": "ሕግ",
        "translation": "law"
    },
    {
        "w": "ማበረታታት",
        "translation": "to urge"
    },
    {
        "w": "ለዘለዓለም",
        "translation": "forever"
    },
    {
        "w": "ማህበረሰብ",
        "translation": "community"
    },
    {
        "w": "አካላዊ",
        "translation": "physical"
    },
    {
        "w": "ምንጩ",
        "translation": "source"
    },
    {
        "w": "ዘምባባ",
        "translation": "palm"
    },
    {
        "w": "መምህር",
        "translation": "teacher"
    },
    {
        "w": "ባሪያ",
        "translation": "slave"
    },
    {
        "w": "ስብ",
        "translation": "fat"
    },
    {
        "w": "መምረጥ",
        "translation": "to prefer"
    },
    {
        "w": "ወታደራዊ",
        "translation": "military"
    },
    {
        "w": "ዳቦ",
        "translation": "bread"
    },
    {
        "w": "ለማመልከት",
        "translation": "to refer"
    },
    {
        "w": "ቤት ውስጥ",
        "translation": "cabin"
    },
    {
        "w": "ሙሉ",
        "translation": "fully"
    },
    {
        "w": "አለመቻል",
        "translation": "unable"
    },
    {
        "w": "አብሮ ለመሄድ",
        "translation": "to accompany"
    },
    {
        "w": "ለመቀጠል",
        "translation": "to proceed"
    },
    {
        "w": "ለመለወጥ",
        "translation": "to exchange"
    },
    {
        "w": "ብዛት",
        "translation": "mass"
    },
    {
        "w": "ጥያቄ",
        "translation": "request"
    },
    {
        "w": "ለማቋቋም ነው",
        "translation": "to establish"
    },
    {
        "w": "ያልተለመደ",
        "translation": "odd"
    },
    {
        "w": "የባህር ዳርቻ",
        "translation": "shore"
    },
    {
        "w": "መምራት",
        "translation": "to guide"
    },
    {
        "w": "ወርቃማ",
        "translation": "golden"
    },
    {
        "w": "እኛ ራሳችን",
        "translation": "ourselves"
    },
    {
        "w": "ትንሽ",
        "translation": "mere"
    },
    {
        "w": "ግንኙነት",
        "translation": "relation"
    },
    {
        "w": "ማስፈራራት",
        "translation": "to threaten"
    },
    {
        "w": "ፍጥነት",
        "translation": "rate"
    },
    {
        "w": "ለመርገም",
        "translation": "to curse"
    },
    {
        "w": "ቢራ",
        "translation": "beer"
    },
    {
        "w": "ርቀት",
        "translation": "distant"
    },
    {
        "w": "ግልጽ",
        "translation": "obvious"
    },
    {
        "w": "አስተያየት ይስጡ",
        "translation": "comment"
    },
    {
        "w": "ክቡር",
        "translation": "noble"
    },
    {
        "w": "ጥቅል",
        "translation": "advantage"
    },
    {
        "w": "እፉኝት",
        "translation": "spite"
    },
    {
        "w": "ፋይል",
        "translation": "file"
    },
    {
        "w": "ዕድል",
        "translation": "possibility"
    },
    {
        "w": "ማድረግ",
        "translation": "to conduct"
    },
    {
        "w": "ለቀቁ",
        "translation": "to fade"
    },
    {
        "w": "ዘመናዊ",
        "translation": "modern"
    },
    {
        "w": "ለማተኮር",
        "translation": "to focus"
    },
    {
        "w": "ማያ ገጽ",
        "translation": "screen"
    },
    {
        "w": "መኖር",
        "translation": "existence"
    },
    {
        "w": "ወደ ተራራው",
        "translation": "to mount"
    },
    {
        "w": "አሸዋ",
        "translation": "sand"
    },
    {
        "w": "ተጠቂ",
        "translation": "victim"
    },
    {
        "w": "ጠቃሚ ምክር",
        "translation": "tip"
    },
    {
        "w": "ቁጣ",
        "translation": "rage"
    },
    {
        "w": "ግብረ-መልስ",
        "translation": "counter"
    },
    {
        "w": "የመጨረሻው",
        "translation": "latter"
    },
    {
        "w": "ለማስፈራራት",
        "translation": "to scare"
    },
    {
        "w": "አደጋ",
        "translation": "accident"
    },
    {
        "w": "ማሳያ",
        "translation": "impression"
    },
    {
        "w": "ለጓደኞች",
        "translation": "to peer"
    },
    {
        "w": "ግብረ ሰዶማዊ",
        "translation": "gay"
    },
    {
        "w": "ለመጉለጥ",
        "translation": "to curl"
    },
    {
        "w": "ለመሰብሰብ",
        "translation": "to collect"
    },
    {
        "w": "መጓዝ",
        "translation": "to march"
    },
    {
        "w": "ለማሳየት",
        "translation": "to display"
    },
    {
        "w": "የባህር ዳርቻ",
        "translation": "beach"
    },
    {
        "w": "አክስት",
        "translation": "aunt"
    },
    {
        "w": "በር",
        "translation": "doorway"
    },
    {
        "w": "ምቹ",
        "translation": "comfortable"
    },
    {
        "w": "መጓዝ",
        "translation": "to drift"
    },
    {
        "w": "ርኅራኄ",
        "translation": "pity"
    },
    {
        "w": "ስሜት",
        "translation": "excitement"
    },
    {
        "w": "ለማሰር",
        "translation": "to arrest"
    },
    {
        "w": "ግልጽ ነው",
        "translation": "obviously"
    },
    {
        "w": "አለበለዚያ",
        "translation": "otherwise"
    },
    {
        "w": "ንግድ",
        "translation": "trade"
    },
    {
        "w": "ክለብ",
        "translation": "club"
    },
    {
        "w": "ሕዋስ",
        "translation": "cell"
    },
    {
        "w": "ጤና",
        "translation": "health"
    },
    {
        "w": "ምዕራብ",
        "translation": "west"
    },
    {
        "w": "ቆዳ",
        "translation": "leather"
    },
    {
        "w": "አስቸጋሪ",
        "translation": "rough"
    },
    {
        "w": "መጮህ",
        "translation": "to gasp"
    },
    {
        "w": "ማከናወን",
        "translation": "to perform"
    },
    {
        "w": "ሮዝ",
        "translation": "pink"
    },
    {
        "w": "ባንድ",
        "translation": "band"
    },
    {
        "w": "ዓረፍተ ነገር",
        "translation": "sentence"
    },
    {
        "w": "ስሜት",
        "translation": "mood"
    },
    {
        "w": "ጽሑፍ",
        "translation": "article"
    },
    {
        "w": "ሰንሰለት",
        "translation": "chain"
    },
    {
        "w": "መኪና",
        "translation": "carriage"
    },
    {
        "w": "ለመናገር",
        "translation": "to utter"
    },
    {
        "w": "ጥላ",
        "translation": "shade"
    },
    {
        "w": "አውሮፕላን",
        "translation": "plane"
    },
    {
        "w": "ኮሌጅ",
        "translation": "college"
    },
    {
        "w": "ይቅር ማለት",
        "translation": "to forgive"
    },
    {
        "w": "ግጥም",
        "translation": "poem"
    },
    {
        "w": "ገመድ",
        "translation": "rope"
    },
    {
        "w": "መብራት",
        "translation": "lamp"
    },
    {
        "w": "ክስተት",
        "translation": "instance"
    },
    {
        "w": "ንጹህ",
        "translation": "pure"
    },
    {
        "w": "ለመጫን",
        "translation": "to load"
    },
    {
        "w": "ሊይዝ ነው",
        "translation": "to seize"
    },
    {
        "w": "ጀርባ",
        "translation": "rear"
    },
    {
        "w": "ሐቀኛ",
        "translation": "honest"
    },
    {
        "w": "ዋና",
        "translation": "major"
    },
    {
        "w": "ተመሳሳይ",
        "translation": "similar"
    },
    {
        "w": "እንቅስቃሴ",
        "translation": "activity"
    },
    {
        "w": "ድብዳቤ",
        "translation": "to echo"
    },
    {
        "w": "የሚይዝ",
        "translation": "to occupy"
    },
    {
        "w": "ታዋቂ",
        "translation": "famous"
    },
    {
        "w": "ለመትረፍ",
        "translation": "to survive"
    },
    {
        "w": "ጭንቀት",
        "translation": "anxious"
    },
    {
        "w": "አስቂኝ",
        "translation": "funny"
    },
    {
        "w": "ክርክር",
        "translation": "argument"
    },
    {
        "w": "ዲያቢሎስ",
        "translation": "devil"
    },
    {
        "w": "በራስ መተማመን",
        "translation": "confidence"
    },
    {
        "w": "ለመፀፀት",
        "translation": "to regret"
    },
    {
        "w": "መፈጸም",
        "translation": "to commit"
    },
    {
        "w": "ላብ",
        "translation": "sweat"
    },
    {
        "w": "ራሺያኛ",
        "translation": "Russian"
    },
    {
        "w": "ክልል",
        "translation": "range"
    },
    {
        "w": "ማንቂያ",
        "translation": "alarm"
    },
    {
        "w": "ለማገገም",
        "translation": "to recover"
    },
    {
        "w": "አስፈሪ",
        "translation": "horror"
    },
    {
        "w": "ደህንነት",
        "translation": "security"
    },
    {
        "w": "መርከበኞች",
        "translation": "crew"
    },
    {
        "w": "ጩኸት",
        "translation": "to roar"
    },
    {
        "w": "ንጋት",
        "translation": "dawn"
    },
    {
        "w": "አገር",
        "translation": "nation"
    },
    {
        "w": "ብረት",
        "translation": "metal"
    },
    {
        "w": "ፍርሃት",
        "translation": "nervous"
    },
    {
        "w": "እስር ቤት",
        "translation": "prison"
    },
    {
        "w": "መተው",
        "translation": "to abandon"
    },
    {
        "w": "በየትኛውም ቦታ",
        "translation": "anywhere"
    },
    {
        "w": "ጥቁር",
        "translation": "poet"
    },
    {
        "w": "ኃጢአት",
        "translation": "sin"
    },
    {
        "w": "ወደ ሣር",
        "translation": "to grasp"
    },
    {
        "w": "አመለካከት",
        "translation": "attitude"
    },
    {
        "w": "ለማረጋጋት",
        "translation": "to secure"
    },
    {
        "w": "መግለጫ",
        "translation": "statement"
    },
    {
        "w": "እርቃናቸውን",
        "translation": "naked"
    },
    {
        "w": "ክፍያ",
        "translation": "bill"
    },
    {
        "w": "ቀጥ ያለ",
        "translation": "brow"
    },
    {
        "w": "ሥነ ምግባር",
        "translation": "moral"
    },
    {
        "w": "ሚና",
        "translation": "role"
    },
    {
        "w": "ብዙ",
        "translation": "plenty"
    },
    {
        "w": "ሥራ",
        "translation": "career"
    },
    {
        "w": "ጅራት",
        "translation": "tail"
    },
    {
        "w": "ልደት",
        "translation": "birth"
    },
    {
        "w": "ለማመልከት",
        "translation": "to apply"
    },
    {
        "w": "ባለስልጣን",
        "translation": "official"
    },
    {
        "w": "ለማዛመድ",
        "translation": "to relate"
    },
    {
        "w": "ዕድል",
        "translation": "fate"
    },
    {
        "w": "ፕሮጀክት",
        "translation": "project"
    },
    {
        "w": "ሸለቆ",
        "translation": "valley"
    },
    {
        "w": "ምናብ",
        "translation": "imagination"
    },
    {
        "w": "ማስፈራራት",
        "translation": "to frighten"
    },
    {
        "w": "ገበያ",
        "translation": "market"
    },
    {
        "w": "ቡጢ",
        "translation": "fist"
    },
    {
        "w": "መክፈል",
        "translation": "to owe"
    },
    {
        "w": "ሐሳብ",
        "translation": "intention"
    },
    {
        "w": "ግንኙነት",
        "translation": "connection"
    },
    {
        "w": "ተከታታይ",
        "translation": "series"
    },
    {
        "w": "ድፍረት",
        "translation": "courage"
    },
    {
        "w": "ግንብ",
        "translation": "tower"
    },
    {
        "w": "ሐይቅ",
        "translation": "lake"
    },
    {
        "w": "ለመነጠፍ",
        "translation": "to emerge"
    },
    {
        "w": "ማጫወት",
        "translation": "to bet"
    },
    {
        "w": "ፊልም",
        "translation": "movie"
    },
    {
        "w": "ቀሚስ",
        "translation": "skirt"
    },
    {
        "w": "ማልቀስ",
        "translation": "to weep"
    },
    {
        "w": "ክፍል",
        "translation": "chamber"
    },
    {
        "w": "ሙከራ",
        "translation": "trial"
    },
    {
        "w": "አስማት",
        "translation": "magic"
    },
    {
        "w": "ሞተር",
        "translation": "engine"
    },
    {
        "w": "አመሰግናለሁ",
        "translation": "thanks"
    },
    {
        "w": "መጻፍ",
        "translation": "writing"
    },
    {
        "w": "አዝራር",
        "translation": "button"
    },
    {
        "w": "ፊልም",
        "translation": "film"
    },
    {
        "w": "ለማደን",
        "translation": "to hunt"
    },
    {
        "w": "የተለመደው",
        "translation": "ordinary"
    },
    {
        "w": "ለማራዘም",
        "translation": "to extend"
    },
    {
        "w": "ለመርሳት",
        "translation": "to spare"
    },
    {
        "w": "ሥነ-መለኮት",
        "translation": "theory"
    },
    {
        "w": "መደበኛ",
        "translation": "normal"
    },
    {
        "w": "ቋሚ",
        "translation": "steady"
    },
    {
        "w": "ለመስጠት",
        "translation": "to grant"
    },
    {
        "w": "ሰኔ",
        "translation": "June"
    },
    {
        "w": "አይሁዳዊ",
        "translation": "Jew"
    },
    {
        "w": "ጽሑፍ",
        "translation": "text"
    },
    {
        "w": "በፍጹም",
        "translation": "absolutely"
    },
    {
        "w": "ክብር",
        "translation": "honour"
    },
    {
        "w": "ለመንሳፈፍ",
        "translation": "to float"
    },
    {
        "w": "ምስጢር",
        "translation": "mystery"
    },
    {
        "w": "ወቅታዊ",
        "translation": "season"
    },
    {
        "w": "ባለቤት",
        "translation": "owner"
    },
    {
        "w": "ለመክፈል",
        "translation": "to afford"
    },
    {
        "w": "ቀለም",
        "translation": "colour"
    },
    {
        "w": "ምክር",
        "translation": "advice"
    },
    {
        "w": "ባልደረባ",
        "translation": "partner"
    },
    {
        "w": "ለማድነቅ",
        "translation": "to admire"
    },
    {
        "w": "ካፒታል",
        "translation": "cap"
    },
    {
        "w": "ነጻነት",
        "translation": "freedom"
    },
    {
        "w": "ለማንፀባረቅ",
        "translation": "to glare"
    },
    {
        "w": "የሚገባቸው ናቸው",
        "translation": "to deserve"
    },
    {
        "w": "ሰላምታ ለመስጠት",
        "translation": "to greet"
    },
    {
        "w": "ለማቅለል",
        "translation": "to hug"
    },
    {
        "w": "ሰራተኞች",
        "translation": "staff"
    },
    {
        "w": "መነሳት",
        "translation": "to thrust"
    },
    {
        "w": "ከዚያ በኋላ",
        "translation": "afterwards"
    },
    {
        "w": "ትክክል",
        "translation": "correct"
    },
    {
        "w": "መመካት",
        "translation": "to depend"
    },
    {
        "w": "ለመዋኘት",
        "translation": "to swim"
    },
    {
        "w": "ምሰሶ",
        "translation": "pool"
    },
    {
        "w": "ምልክት",
        "translation": "signal"
    },
    {
        "w": "ንጹህ",
        "translation": "innocent"
    },
    {
        "w": "ሙሉ",
        "translation": "heel"
    },
    {
        "w": "በአጠቃላይ",
        "translation": "generally"
    },
    {
        "w": "መጋረጃ",
        "translation": "curtain"
    },
    {
        "w": "ባለቤትነት",
        "translation": "possession"
    },
    {
        "w": "ፎቶግራፍ",
        "translation": "photograph"
    },
    {
        "w": "እምብዛም አይደለም",
        "translation": "scarcely"
    },
    {
        "w": "ሬዲዮ",
        "translation": "radio"
    },
    {
        "w": "ተወላጅ",
        "translation": "native"
    },
    {
        "w": "ግራጫ",
        "translation": "grey"
    },
    {
        "w": "ብርድ ልብስ",
        "translation": "blanket"
    },
    {
        "w": "ቃለመጠይቅ",
        "translation": "interview"
    },
    {
        "w": "እንዲፈቀድ",
        "translation": "to permit"
    },
    {
        "w": "ቆሻሻ",
        "translation": "dirty"
    },
    {
        "w": "እፍረትን",
        "translation": "shame"
    },
    {
        "w": "ማቆም ነው",
        "translation": "to cease"
    },
    {
        "w": "እንቁላል",
        "translation": "egg"
    },
    {
        "w": "ማብራሪያ",
        "translation": "explanation"
    },
    {
        "w": "እቃ",
        "translation": "wagon"
    },
    {
        "w": "ተመልካች",
        "translation": "audience"
    },
    {
        "w": "አስፈሪ",
        "translation": "awful"
    },
    {
        "w": "ቱቦ",
        "translation": "pipe"
    },
    {
        "w": "ለመጉዳት",
        "translation": "to strain"
    },
    {
        "w": "አርቲስት",
        "translation": "artist"
    },
    {
        "w": "ለመጨፍለቅ",
        "translation": "to squeeze"
    },
    {
        "w": "ሮማን",
        "translation": "Roman"
    },
    {
        "w": "ይግባኝ ማለት",
        "translation": "to appeal"
    },
    {
        "w": "ጨርቅ",
        "translation": "cloth"
    },
    {
        "w": "አስፈሪ",
        "translation": "terror"
    },
    {
        "w": "ድምጽ",
        "translation": "volume"
    },
    {
        "w": "ምስራቅ",
        "translation": "east"
    },
    {
        "w": "ክፍል",
        "translation": "section"
    },
    {
        "w": "ለረብሻ",
        "translation": "to disturb"
    },
    {
        "w": "ደረጃ",
        "translation": "rank"
    },
    {
        "w": "ወዳጃዊ",
        "translation": "friendly"
    },
    {
        "w": "ረሃብ",
        "translation": "hungry"
    },
    {
        "w": "መራመድ",
        "translation": "to creep"
    },
    {
        "w": "ጉብኝት",
        "translation": "visitor"
    },
    {
        "w": "በየትኛውም ቦታ",
        "translation": "everywhere"
    },
    {
        "w": "ሃይማኖታዊ",
        "translation": "religious"
    },
    {
        "w": "ለማግኘት",
        "translation": "to obtain"
    },
    {
        "w": "ስጋ",
        "translation": "meat"
    },
    {
        "w": "ሴት ልጅ",
        "translation": "maid"
    },
    {
        "w": "ፍትህ",
        "translation": "justice"
    },
    {
        "w": "እድገት",
        "translation": "progress"
    },
    {
        "w": "ቆዳ",
        "translation": "lap"
    },
    {
        "w": "ወደ ላይ",
        "translation": "upstairs"
    },
    {
        "w": "እምነት",
        "translation": "belief"
    },
    {
        "w": "ለመገናኘት",
        "translation": "to connect"
    },
    {
        "w": "ልብ ወለድ",
        "translation": "novel"
    },
    {
        "w": "ነፍስ",
        "translation": "ghost"
    },
    {
        "w": "ዓላማ አለው",
        "translation": "to aim"
    },
    {
        "w": "መወረር",
        "translation": "to fling"
    },
    {
        "w": "ቅዳሜ",
        "translation": "Saturday"
    },
    {
        "w": "ቀዶ ጥገና",
        "translation": "operation"
    },
    {
        "w": "ለማስታገስ",
        "translation": "to relieve"
    },
    {
        "w": "ከእንግዲህ ወዲያ",
        "translation": "anymore"
    },
    {
        "w": "ቢሆንም",
        "translation": "despite"
    },
    {
        "w": "ወገብ",
        "translation": "waist"
    },
    {
        "w": "ወተት",
        "translation": "milk"
    },
    {
        "w": "መቀበል",
        "translation": "to embrace"
    },
    {
        "w": "መታጠቢያ ቤት",
        "translation": "bathroom"
    },
    {
        "w": "ድስት",
        "translation": "pot"
    },
    {
        "w": "ለመገናኘት",
        "translation": "to encounter"
    },
    {
        "w": "ንብረት",
        "translation": "estate"
    },
    {
        "w": "ቀዳሚ",
        "translation": "previous"
    },
    {
        "w": "መሽከርከር",
        "translation": "to spin"
    },
    {
        "w": "ልብ ወለድ",
        "translation": "fiction"
    },
    {
        "w": "ታላቅ",
        "translation": "grand"
    },
    {
        "w": "ደረጃዎች",
        "translation": "trap"
    },
    {
        "w": "እንዲዛባ ማድረግ",
        "translation": "to affect"
    },
    {
        "w": "መድሃኒት",
        "translation": "drug"
    },
    {
        "w": "ሐር",
        "translation": "silk"
    },
    {
        "w": "እራት",
        "translation": "supper"
    },
    {
        "w": "ሰክሰዋል",
        "translation": "drunk"
    },
    {
        "w": "ፍንጭ",
        "translation": "hint"
    },
    {
        "w": "ለመተካት",
        "translation": "to replace"
    },
    {
        "w": "ጉዳት",
        "translation": "harm"
    },
    {
        "w": "ፍሬ",
        "translation": "fruit"
    },
    {
        "w": "ኮምፒተር",
        "translation": "computer"
    },
    {
        "w": "ክንድ",
        "translation": "elbow"
    },
    {
        "w": "ለመውረድ",
        "translation": "to descend"
    },
    {
        "w": "መታ ማድረግ",
        "translation": "to tap"
    },
    {
        "w": "በረንት",
        "translation": "porch"
    },
    {
        "w": "ለመበጥበጥ",
        "translation": "to swell"
    },
    {
        "w": "የላይኛው",
        "translation": "upper"
    },
    {
        "w": "ፖሊስ",
        "translation": "cop"
    },
    {
        "w": "አያቴ",
        "translation": "grandfather"
    },
    {
        "w": "ልምምድ",
        "translation": "exercise"
    },
    {
        "w": "ቤተ-መጽሐፍት",
        "translation": "library"
    },
    {
        "w": "ጡንቻ",
        "translation": "muscle"
    },
    {
        "w": "ለቀቁ",
        "translation": "to freeze"
    },
    {
        "w": "መበሳጨት",
        "translation": "to upset"
    },
    {
        "w": "ለማጉላት",
        "translation": "to complain"
    },
    {
        "w": "አውሮፓ",
        "translation": "Europe"
    },
    {
        "w": "ሞገስ",
        "translation": "favor"
    },
    {
        "w": "ስር",
        "translation": "root"
    },
    {
        "w": "አውሬ",
        "translation": "beast"
    },
    {
        "w": "ሊነሳ ነው",
        "translation": "to arise"
    },
    {
        "w": "ግጥሚያ",
        "translation": "challenge"
    },
    {
        "w": "ገላ መታጠብ",
        "translation": "shower"
    },
    {
        "w": "ግሪክኛ",
        "translation": "Greek"
    },
    {
        "w": "በመላው",
        "translation": "throughout"
    },
    {
        "w": "ወሲባዊ",
        "translation": "sexual"
    },
    {
        "w": "ሕብረቁምፊ",
        "translation": "string"
    },
    {
        "w": "ገደብ",
        "translation": "limit"
    },
    {
        "w": "ምግብ ቤት",
        "translation": "restaurant"
    },
    {
        "w": "ሃይማኖት",
        "translation": "religion"
    },
    {
        "w": "ግፊት",
        "translation": "pressure"
    },
    {
        "w": "እንዳይጠፋ",
        "translation": "to vanish"
    },
    {
        "w": "ጸጋ",
        "translation": "grace"
    },
    {
        "w": "ተጣብቋል",
        "translation": "vast"
    },
    {
        "w": "መመስከር",
        "translation": "to confess"
    },
    {
        "w": "መስዋዕት",
        "translation": "sacrifice"
    },
    {
        "w": "መድረሻ",
        "translation": "arrival"
    },
    {
        "w": "ለመርሳት",
        "translation": "to jerk"
    },
    {
        "w": "ትምህርት",
        "translation": "lesson"
    },
    {
        "w": "ሪንግ",
        "translation": "hip"
    },
    {
        "w": "ወጣት",
        "translation": "lad"
    },
    {
        "w": "ዘይት",
        "translation": "oil"
    },
    {
        "w": "ንድፍ",
        "translation": "pattern"
    },
    {
        "w": "መደበኛ",
        "translation": "regular"
    },
    {
        "w": "ጠመንጃ",
        "translation": "rifle"
    },
    {
        "w": "ዕድለኞች",
        "translation": "lucky"
    },
    {
        "w": "አህ",
        "translation": "ass"
    },
    {
        "w": "ድካም",
        "translation": "dull"
    },
    {
        "w": "ንቁ",
        "translation": "conscious"
    },
    {
        "w": "ቂም",
        "translation": "mess"
    },
    {
        "w": "አካል",
        "translation": "element"
    },
    {
        "w": "ጩኸት",
        "translation": "to groan"
    },
    {
        "w": "ውጤት",
        "translation": "consequence"
    },
    {
        "w": "ሚዛን",
        "translation": "balance"
    },
    {
        "w": "መርህ",
        "translation": "principle"
    },
    {
        "w": "ፍቅር",
        "translation": "affection"
    },
    {
        "w": "ወቅታዊ",
        "translation": "current"
    },
    {
        "w": "ሻማ",
        "translation": "candle"
    },
    {
        "w": "ለመሸሽ",
        "translation": "to flee"
    },
    {
        "w": "ቁመት",
        "translation": "height"
    },
    {
        "w": "አክሲዮን",
        "translation": "stock"
    },
    {
        "w": "ባላባ",
        "translation": "knight"
    },
    {
        "w": "ሰዓት",
        "translation": "clock"
    },
    {
        "w": "ቤተመንግስት",
        "translation": "castle"
    },
    {
        "w": "አጥር",
        "translation": "fence"
    },
    {
        "w": "ጥፋተኛ",
        "translation": "guilty"
    },
    {
        "w": "ለመፍታት",
        "translation": "to resolve"
    },
    {
        "w": "ለማዳመጥ ነው",
        "translation": "to kneel"
    },
    {
        "w": "ዘና ለማለት",
        "translation": "to relax"
    },
    {
        "w": "ቤተ መቅደስ",
        "translation": "temple"
    },
    {
        "w": "ከዚህም ሌላ",
        "translation": "besides"
    },
    {
        "w": "መጽሔት",
        "translation": "magazine"
    },
    {
        "w": "ተወዳጅ",
        "translation": "favorite"
    },
    {
        "w": "ተቀምጧል",
        "translation": "seated"
    },
    {
        "w": "ኤፕሪል",
        "translation": "April"
    },
    {
        "w": "ወግ",
        "translation": "tradition"
    },
    {
        "w": "መራራ",
        "translation": "bitter"
    },
    {
        "w": "መገንዘብ",
        "translation": "to appreciate"
    },
    {
        "w": "ሳይንስ",
        "translation": "science"
    },
    {
        "w": "ታዋቂ",
        "translation": "popular"
    },
    {
        "w": "አያት",
        "translation": "grandmother"
    },
    {
        "w": "ሞዴል",
        "translation": "model"
    },
    {
        "w": "መገረም",
        "translation": "to shiver"
    },
    {
        "w": "በየቀኑ",
        "translation": "daily"
    },
    {
        "w": "ውይይት",
        "translation": "discussion"
    },
    {
        "w": "ልዑል",
        "translation": "prince"
    },
    {
        "w": "ሞገስ",
        "translation": "charm"
    },
    {
        "w": "እንዲወገድ",
        "translation": "to strip"
    },
    {
        "w": "ለመደምደም",
        "translation": "to conclude"
    },
    {
        "w": "ዩኒፎርም",
        "translation": "uniform"
    },
    {
        "w": "መግለጫ",
        "translation": "description"
    },
    {
        "w": "ጣሪያ",
        "translation": "ceiling"
    },
    {
        "w": "ጫካ",
        "translation": "bush"
    },
    {
        "w": "ፍላጎት ያለው",
        "translation": "interested"
    },
    {
        "w": "በቅርበት",
        "translation": "closely"
    },
    {
        "w": "መቆለጥ",
        "translation": "to cling"
    },
    {
        "w": "መቀመጫ",
        "translation": "bench"
    },
    {
        "w": "ሊከታተል ነው",
        "translation": "to pursue"
    },
    {
        "w": "ጥሩ",
        "translation": "brave"
    },
    {
        "w": "እርካታ",
        "translation": "satisfaction"
    },
    {
        "w": "መጎተት",
        "translation": "to crawl"
    },
    {
        "w": "አውቶቡስ",
        "translation": "bus"
    },
    {
        "w": "ጽሑፋዊ",
        "translation": "literary"
    },
    {
        "w": "ደም",
        "translation": "bloody"
    },
    {
        "w": "ለማወዳደር",
        "translation": "to compare"
    },
    {
        "w": "ውጭ አገር",
        "translation": "foreign"
    },
    {
        "w": "ለማቅረብ",
        "translation": "to propose"
    },
    {
        "w": "ብዕር",
        "translation": "pen"
    },
    {
        "w": "ለመጠየቅ",
        "translation": "to inquire"
    },
    {
        "w": "ቅሬታ",
        "translation": "grief"
    },
    {
        "w": "እርዳታ",
        "translation": "aid"
    },
    {
        "w": "ጓደኝነት",
        "translation": "friendship"
    },
    {
        "w": "መሰናከል",
        "translation": "to crash"
    },
    {
        "w": "ጀብድ",
        "translation": "adventure"
    },
    {
        "w": "ለማቆም",
        "translation": "to stride"
    },
    {
        "w": "ባህል",
        "translation": "culture"
    },
    {
        "w": "ሞገድ",
        "translation": "beam"
    },
    {
        "w": "ደህንነት",
        "translation": "safety"
    },
    {
        "w": "ማርች",
        "translation": "March"
    },
    {
        "w": "መነጽር",
        "translation": "glasses"
    },
    {
        "w": "ችሎታ",
        "translation": "ability"
    },
    {
        "w": "በጣም ጥሩ",
        "translation": "excellent"
    },
    {
        "w": "ጥብቅ",
        "translation": "firmly"
    },
    {
        "w": "ግንዛቤ",
        "translation": "understanding"
    },
    {
        "w": "እንብ",
        "translation": "steel"
    },
    {
        "w": "ጅማት",
        "translation": "nerve"
    },
    {
        "w": "መልአክ",
        "translation": "angel"
    },
    {
        "w": "ግዙፍ",
        "translation": "giant"
    },
    {
        "w": "ጥርጣሬ",
        "translation": "suspicion"
    },
    {
        "w": "ያልታወቀ",
        "translation": "unknown"
    },
    {
        "w": "ለመደነቅ",
        "translation": "to startle"
    },
    {
        "w": "እኩል",
        "translation": "equal"
    },
    {
        "w": "ድንኳን",
        "translation": "tent"
    },
    {
        "w": "ለማንሳት",
        "translation": "to gleam"
    },
    {
        "w": "ብልጥ",
        "translation": "smart"
    },
    {
        "w": "ትውልድ",
        "translation": "generation"
    },
    {
        "w": "መቃወም",
        "translation": "to resist"
    },
    {
        "w": "ለማለት",
        "translation": "to sob"
    },
    {
        "w": "በ",
        "translation": "per"
    },
    {
        "w": "በየትኛውም ጊዜ",
        "translation": "whenever"
    },
    {
        "w": "ፊደል",
        "translation": "spell"
    },
    {
        "w": "ምላሽ",
        "translation": "reaction"
    },
    {
        "w": "ትምህርት",
        "translation": "education"
    },
    {
        "w": "ማስረጃ",
        "translation": "proof"
    },
    {
        "w": "ደስ የሚለው",
        "translation": "to excite"
    },
    {
        "w": "ለማንሳት",
        "translation": "to blink"
    },
    {
        "w": "ጅራፍ",
        "translation": "to whip"
    },
    {
        "w": "ለመለየት",
        "translation": "to identify"
    },
    {
        "w": "ጎድጓዳ ሳህን",
        "translation": "bowl"
    },
    {
        "w": "ለማሳየት",
        "translation": "to expose"
    },
    {
        "w": "ማስጠንቀቂያ",
        "translation": "warning"
    },
    {
        "w": "ጥልቀት",
        "translation": "depth"
    },
    {
        "w": "ምዕራፍ",
        "translation": "chapter"
    },
    {
        "w": "ዝግጅት",
        "translation": "arrangement"
    },
    {
        "w": "ለመፈወስ",
        "translation": "to ache"
    },
    {
        "w": "ለመጥፋት",
        "translation": "to sip"
    },
    {
        "w": "ከባድ",
        "translation": "heavily"
    },
    {
        "w": "ጣልያንኛ",
        "translation": "Italian"
    },
    {
        "w": "ጨረፍ",
        "translation": "eyebrow"
    },
    {
        "w": "ለማላገጥ",
        "translation": "to chuckle"
    },
    {
        "w": "ቤተመንግስት",
        "translation": "palace"
    },
    {
        "w": "በቁም ነገር",
        "translation": "seriously"
    },
    {
        "w": "ማፈግፈግ",
        "translation": "to retreat"
    },
    {
        "w": "ስዕል",
        "translation": "painting"
    },
    {
        "w": "አስፈላጊነት",
        "translation": "importance"
    },
    {
        "w": "ተጨማሪ",
        "translation": "extra"
    },
    {
        "w": "ንግሥት",
        "translation": "queen"
    },
    {
        "w": "በጸጥታ",
        "translation": "silently"
    },
    {
        "w": "የእጅ አንጓ",
        "translation": "wrist"
    },
    {
        "w": "ለመቁጠር",
        "translation": "to slam"
    },
    {
        "w": "ኃላፊነት",
        "translation": "responsibility"
    },
    {
        "w": "በጠቅላላው",
        "translation": "altogether"
    },
    {
        "w": "አዎ",
        "translation": "jaw"
    },
    {
        "w": "መጥፎ",
        "translation": "badly"
    },
    {
        "w": "መንገደኛ",
        "translation": "passenger"
    },
    {
        "w": "መክፈቻ",
        "translation": "opening"
    },
    {
        "w": "ሐምሌ",
        "translation": "July"
    },
    {
        "w": "ችሎታ",
        "translation": "skill"
    },
    {
        "w": "ተልዕኮ",
        "translation": "mission"
    },
    {
        "w": "ለማባረር",
        "translation": "to chase"
    },
    {
        "w": "ብጁ",
        "translation": "custom"
    },
    {
        "w": "ማራዘም",
        "translation": "to tend"
    },
    {
        "w": "ዘዴ",
        "translation": "method"
    },
    {
        "w": "ላም",
        "translation": "cow"
    },
    {
        "w": "ጉጉት",
        "translation": "eager"
    },
    {
        "w": "ተዋጊ",
        "translation": "warrior"
    },
    {
        "w": "መጨባበጥ",
        "translation": "to clutch"
    },
    {
        "w": "ለመገንዘብ",
        "translation": "to perceive"
    },
    {
        "w": "ዋሻ",
        "translation": "cave"
    },
    {
        "w": "ብድር",
        "translation": "credit"
    },
    {
        "w": "ምስጋና",
        "translation": "praise"
    },
    {
        "w": "ችሎታ ያለው",
        "translation": "capable"
    },
    {
        "w": "ለመቅጠር",
        "translation": "to hire"
    },
    {
        "w": "ስሪት",
        "translation": "version"
    },
    {
        "w": "ጎረቤት",
        "translation": "neighbor"
    },
    {
        "w": "ለመደበቅ",
        "translation": "to conceal"
    },
    {
        "w": "ለመሸከም",
        "translation": "to bore"
    },
    {
        "w": "ርህራሄ",
        "translation": "sympathy"
    },
    {
        "w": "ሽቦ",
        "translation": "wire"
    },
    {
        "w": "የማወቅ ጉጉት",
        "translation": "curiosity"
    },
    {
        "w": "ማስገደድ",
        "translation": "to oblige"
    },
    {
        "w": "ጥሪ",
        "translation": "belt"
    },
    {
        "w": "ዘመድ",
        "translation": "relative"
    },
    {
        "w": "አመለካከት",
        "translation": "notion"
    },
    {
        "w": "ለመያዝ",
        "translation": "to capture"
    },
    {
        "w": "ለመቀየር",
        "translation": "to switch"
    },
    {
        "w": "ደብዳቤ",
        "translation": "mail"
    },
    {
        "w": "ሶፋ",
        "translation": "couch"
    },
    {
        "w": "ኮሪዶር",
        "translation": "corridor"
    },
    {
        "w": "ለመሄድ",
        "translation": "to depart"
    },
    {
        "w": "ወዲያውኑ",
        "translation": "instantly"
    },
    {
        "w": "ስፓኒሽ",
        "translation": "Spanish"
    },
    {
        "w": "ማስፈራራት",
        "translation": "threat"
    },
    {
        "w": "ቻይንኛ",
        "translation": "Chinese"
    },
    {
        "w": "ከፍተኛ",
        "translation": "highly"
    },
    {
        "w": "በመጨረሻ",
        "translation": "eventually"
    },
    {
        "w": "እንዲቀጥል",
        "translation": "to employ"
    },
    {
        "w": "አገናኝ",
        "translation": "link"
    },
    {
        "w": "መጥፋት",
        "translation": "absence"
    },
    {
        "w": "ተስፋ መቁረጥ",
        "translation": "despair"
    },
    {
        "w": "መዋቅር",
        "translation": "structure"
    },
    {
        "w": "ብቸኛ",
        "translation": "lonely"
    },
    {
        "w": "አመስጋኝ",
        "translation": "grateful"
    },
    {
        "w": "ለመወጣት",
        "translation": "to withdraw"
    },
    {
        "w": "አቃፊ",
        "translation": "map"
    },
    {
        "w": "በአብዛኛው",
        "translation": "mostly"
    },
    {
        "w": "አገልጋይ",
        "translation": "minister"
    },
    {
        "w": "ትራስ",
        "translation": "pillow"
    },
    {
        "w": "የሚታይ",
        "translation": "visible"
    },
    {
        "w": "ዕቃ",
        "translation": "vessel"
    },
    {
        "w": "እመቤት",
        "translation": "mistress"
    },
    {
        "w": "ለማገናኘት",
        "translation": "to attach"
    },
    {
        "w": "ውብ",
        "translation": "delicate"
    },
    {
        "w": "ግራ የሚያጋባ",
        "translation": "to confuse"
    },
    {
        "w": "ባለሙያ",
        "translation": "professional"
    },
    {
        "w": "ሙቀት",
        "translation": "warmth"
    },
    {
        "w": "ተሰበረ",
        "translation": "broken"
    },
    {
        "w": "ለሙቀት",
        "translation": "to exhaust"
    },
    {
        "w": "ሞገስ",
        "translation": "silly"
    },
    {
        "w": "መርማሪ",
        "translation": "detective"
    },
    {
        "w": "ሐዘን",
        "translation": "sorrow"
    },
    {
        "w": "ኮርቻ",
        "translation": "saddle"
    },
    {
        "w": "ጉዳት",
        "translation": "damage"
    },
    {
        "w": "ያልተለመደ",
        "translation": "rare"
    },
    {
        "w": "መሸከምን",
        "translation": "to betray"
    },
    {
        "w": "ለማነቃቃት",
        "translation": "to slap"
    },
    {
        "w": "እውቅና መስጠት",
        "translation": "to acknowledge"
    },
    {
        "w": "ቀሚስ",
        "translation": "gown"
    },
    {
        "w": "ጠንካራ",
        "translation": "solid"
    },
    {
        "w": "እጅግ በጣም",
        "translation": "extremely"
    },
    {
        "w": "ሐረግ",
        "translation": "phrase"
    },
    {
        "w": "ምስማር",
        "translation": "nail"
    },
    {
        "w": "ለመከራየት",
        "translation": "to rent"
    },
    {
        "w": "ለማቆየት",
        "translation": "to maintain"
    },
    {
        "w": "ኦገስት",
        "translation": "August"
    },
    {
        "w": "ለመማረክ",
        "translation": "to impress"
    },
    {
        "w": "ሠራተኛ",
        "translation": "worker"
    },
    {
        "w": "ነጥበ ምልክት",
        "translation": "bullet"
    },
    {
        "w": "እምብርት",
        "translation": "trunk"
    },
    {
        "w": "መደምደሚያ",
        "translation": "conclusion"
    },
    {
        "w": "ጥይት",
        "translation": "pistol"
    },
    {
        "w": "ጎጆ",
        "translation": "cottage"
    },
    {
        "w": "ድንቅ",
        "translation": "brilliant"
    },
    {
        "w": "ዜጋ",
        "translation": "citizen"
    },
    {
        "w": "ፈጣን",
        "translation": "rapidly"
    },
    {
        "w": "ማፏሸት",
        "translation": "to whistle"
    },
    {
        "w": "በቅርቡ",
        "translation": "recently"
    },
    {
        "w": "ተስፋ መቁረጥ",
        "translation": "desperate"
    },
    {
        "w": "ቀላል",
        "translation": "lightly"
    },
    {
        "w": "ገጽታ",
        "translation": "aspect"
    },
    {
        "w": "ግራ መጋባት",
        "translation": "confusion"
    },
    {
        "w": "አስቀያሚ",
        "translation": "ugly"
    },
    {
        "w": "እውቀት",
        "translation": "intelligence"
    },
    {
        "w": "ሶፋ",
        "translation": "sofa"
    },
    {
        "w": "ለማፍሰስ",
        "translation": "to shed"
    },
    {
        "w": "ድንግል",
        "translation": "darling"
    },
    {
        "w": "አባዬ",
        "translation": "dad"
    },
    {
        "w": "ጥምጥም",
        "translation": "curve"
    },
    {
        "w": "ነፋስ",
        "translation": "breeze"
    },
    {
        "w": "እኩል",
        "translation": "equally"
    },
    {
        "w": "ቴፕ",
        "translation": "tape"
    },
    {
        "w": "ለመልቀቅ",
        "translation": "to venture"
    },
    {
        "w": "ለመቧከር",
        "translation": "to scratch"
    },
    {
        "w": "መዓዛ",
        "translation": "scent"
    },
    {
        "w": "ለመሳብ",
        "translation": "to attract"
    },
    {
        "w": "ልማት",
        "translation": "development"
    },
    {
        "w": "እንዲቆም",
        "translation": "to halt"
    },
    {
        "w": "ለመሰካት",
        "translation": "to pin"
    },
    {
        "w": "ለማንሳት",
        "translation": "to shove"
    },
    {
        "w": "ሕክምና",
        "translation": "medical"
    },
    {
        "w": "መሬቶች",
        "translation": "slope"
    },
    {
        "w": "በተፈጥሮ",
        "translation": "naturally"
    },
    {
        "w": "አእምሮ",
        "translation": "mental"
    },
    {
        "w": "ለመከላከል",
        "translation": "to defend"
    },
    {
        "w": "ለማግኘት",
        "translation": "to earn"
    },
    {
        "w": "መጸለይ",
        "translation": "to bid"
    },
    {
        "w": "ካሜራ",
        "translation": "camera"
    },
    {
        "w": "ቆሻሻ",
        "translation": "dirt"
    },
    {
        "w": "ሼል",
        "translation": "shell"
    },
    {
        "w": "እሽቅድምድም",
        "translation": "plot"
    },
    {
        "w": "አክሊል",
        "translation": "crown"
    },
    {
        "w": "ተሳክቷል",
        "translation": "successful"
    },
    {
        "w": "በጎነት",
        "translation": "virtue"
    },
    {
        "w": "ጎርፍ",
        "translation": "flood"
    },
    {
        "w": "ሮም",
        "translation": "Rome"
    },
    {
        "w": "ቦርሳ",
        "translation": "purse"
    },
    {
        "w": "ግጥም",
        "translation": "poetry"
    },
    {
        "w": "ለመምታት",
        "translation": "to pop"
    },
    {
        "w": "ሆድ",
        "translation": "belly"
    },
    {
        "w": "ጠቅላላ",
        "translation": "total"
    },
    {
        "w": "ለማረጋገጥ",
        "translation": "to confirm"
    },
    {
        "w": "ፍርድ",
        "translation": "judgment"
    },
    {
        "w": "ግዙፍ",
        "translation": "enormous"
    },
    {
        "w": "ለመደፍረስ",
        "translation": "to crush"
    },
    {
        "w": "ቅርጫት",
        "translation": "basket"
    },
    {
        "w": "መጠለያ",
        "translation": "shelter"
    },
    {
        "w": "ለሞሸር",
        "translation": "to pat"
    },
    {
        "w": "ኃላፊነት የሚሰማው",
        "translation": "responsible"
    },
    {
        "w": "ንቃተ ህሊና",
        "translation": "consciousness"
    },
    {
        "w": "በቅርቡ",
        "translation": "recent"
    },
    {
        "w": "መከፋፈል",
        "translation": "to divide"
    },
    {
        "w": "ወንጀለኛ",
        "translation": "criminal"
    },
    {
        "w": "ውድ",
        "translation": "precious"
    },
    {
        "w": "በአግባቡ",
        "translation": "fairly"
    },
    {
        "w": "ለማበረታታት",
        "translation": "to encourage"
    },
    {
        "w": "ድንበር",
        "translation": "border"
    },
    {
        "w": "ውቅያኖስ",
        "translation": "ocean"
    },
    {
        "w": "ድድ",
        "translation": "blade"
    },
    {
        "w": "ጭን",
        "translation": "thigh"
    },
    {
        "w": "ነጸብራቅ",
        "translation": "reflection"
    },
    {
        "w": "የቀብር ሥነ ሥርዓት",
        "translation": "funeral"
    },
    {
        "w": "መምሪያ",
        "translation": "department"
    },
    {
        "w": "ያልተለመደ",
        "translation": "unusual"
    },
    {
        "w": "ለማመን",
        "translation": "to persuade"
    },
    {
        "w": "ተሽከርካሪ",
        "translation": "vehicle"
    },
    {
        "w": "ፍርሃት",
        "translation": "dread"
    },
    {
        "w": "ዳራ",
        "translation": "background"
    },
    {
        "w": "መደበኛ",
        "translation": "standard"
    },
    {
        "w": "ቴሌቪዥን",
        "translation": "television"
    },
    {
        "w": "ሊከሰሱ ይችላሉ",
        "translation": "to accuse"
    },
    {
        "w": "ሙሉ በሙሉ",
        "translation": "totally"
    },
    {
        "w": "ጥቅማ ጥቅም",
        "translation": "benefit"
    },
    {
        "w": "መመገብ",
        "translation": "dining"
    },
    {
        "w": "ለማጎዳኘት",
        "translation": "to associate"
    },
    {
        "w": "መከሰት",
        "translation": "to render"
    },
    {
        "w": "ጸሐፊ",
        "translation": "clerk"
    },
    {
        "w": "ፈቃድ",
        "translation": "permission"
    }
]