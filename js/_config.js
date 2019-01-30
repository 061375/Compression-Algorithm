			
			const SHOWLOG = true;
			const SHOWDELIM = true;

			const URLTARGET = 'medium.txt';
			
			
			
			// declare some UTF-16 characters

			const s1 = '\u00E9';
			const s2 = '\u00A1';
			const s3 = '\u00A2';
			const s4 = '\u00A3';
			const s5 = '\u00A4';
			const s6 = '\u00A5';
			const s7 = '\u00A6';
			const s8 = '\u00A7';
			const s9 = '\u00A8';
			const s10 = '\u00A9';
			const s11 = '\u00B0';
			const s12 = '\u00B1';
			const s13 = '\u00B2';
			const s14 = '\u00B3';
			const s15 = '\u00B4';
			const s16 = '\u00B5';
			const s17 = '\u00B6';
			const s18 = '\u00B7';
			const s19 = '\u00B8';
			const s20 = '\u00B9';
			const s21 = '\u00BB';
			const s22 = '\u00C0';
			const s23 = '\u00C1';
			const s24 = '\u00C2';
			const s25 = '\u00C3';
			const s26 = '\u00C4';
			const s27 = '\u00C5';
			const s28 = '\u00C6';
			const s29 = '\u00C7';
			const s30 = '\u00C8';
			const s31 = '\u00C9';
			const s32 = '\u00CA';
			const s33 = '\u00CB';

			// delimmiters for various
			const SQUAREDELIM = "#";
			const MAIN = '|';
			const TENDELIM = s22;
			const HUNDREDDELIM = s23;
			const THOUSANDDELIM = s24;
			const DICTDELIM = s25;
			const DICTWORDDELIM = s26;
			const DICTKEYVALDELIM = s27;
			const DICTSPACEDELIM = s30;
			const DICTNOLONGERLOOKING = s31;

			// @const {Object}
			const CYPHER = {
				"00":s12,
				"01":s13,
				"02":s14,
				"03":s15,
				"04":s16,
				"05":s17,
				"06":s18,
				"07":s19,
				"08":s20,
				"09":s21,
				"10":"a",
				"11":"b",
				"12":"c",
				"13":"d",
				"14":"e",
				"15":"f",
				"16":"g",
				"17":"h",
				"18":"i",
				"19":"j",
				"20":"k",
				"21":"l",
				"22":"m",
				"23":"n",
				"24":"o",
				"25":"p",
				"26":"q",
				"27":"r",
				"28":"s",
				"29":"t",
				"30":"u",
				"31":"v",
				"32":"w",
				"33":"x",
				"34":"y",
				"35":"z",
				"36":"A",
				"37":"B",
				"38":"C",
				"39":"D",
				"40":"E",
				"41":"F",
				"42":"G",
				"43":"H",
				"44":"I",
				"45":"J",
				"46":"K",
				"47":"L",
				"48":"M",
				"49":"N",
				"50":"O",
				"51":"P",
				"52":"Q",
				"53":"R",
				"54":"S",
				"55":"z",
				"56":"U",
				"57":"V",
				"58":"W",
				"59":"X",
				"60":"Y",
				"61":"Z",
				"62":"!",
				"63":"@",
				"64":"$",
				"65":"%",
				"66":"'",
				"67":s32,
				"68":"*",
				"69":"(",
				"70":")",
				"71":"-",
				"72":"_",
				"73":"=",
				"74":s33,
				"75":"[",
				"76":"{",
				"77":"]",
				"78":"}",
				"79":"~",
				"80":";",
				"81":":",
				"82":"'",
				"83":"<",
				"84":".",
				"85":">",
				"86":"?",
				"87":"`",
				"88":s28,
				"89":s1,
				"90":s2,
				"91":s3,
				"92":s4,
				"93":s5,
				"94":s6,
				"95":s7,
				"96":s8,
				"97":s9,
				"98":s10,
				"99":s11
			};

			// leave empty (this will be reveresed if necessary in code)
			var REVERSECYPHER = {};

			// @var {Object}
			var thedata = {
				raw:'',
				keys:{},
				found:{},
				compressed:'',
				out:''
			}