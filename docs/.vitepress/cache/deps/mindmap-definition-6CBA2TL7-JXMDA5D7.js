import {
  selectSvgElement
} from "./chunk-5ZGLDYYF.js";
import {
  createText
} from "./chunk-2A4ST5ED.js";
import {
  parseFontSize
} from "./chunk-7K2XELWC.js";
import {
  __name,
  darken_default,
  defaultConfig_default,
  getConfig2,
  is_dark_default,
  lighten_default,
  log,
  sanitizeText,
  select_default,
  setupGraphViewbox
} from "./chunk-NWDW7DDC.js";
import "./chunk-4UTD2NOI.js";
import "./chunk-4ID7Q6GT.js";
import "./chunk-MYMU6UB3.js";
import "./chunk-TLEQMCLR.js";
import {
  require_cytoscape_cose_bilkent
} from "./chunk-2VGQEP4R.js";
import {
  cytoscape
} from "./chunk-XZXRGDA2.js";
import {
  __toESM
} from "./chunk-FDBJFBLO.js";

// node_modules/mermaid/dist/chunks/mermaid.core/mindmap-definition-6CBA2TL7.mjs
var import_cytoscape_cose_bilkent = __toESM(require_cytoscape_cose_bilkent(), 1);
var parser = function() {
  var o = __name(function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v) ;
    return o2;
  }, "o"), $V0 = [1, 4], $V1 = [1, 13], $V2 = [1, 12], $V3 = [1, 15], $V4 = [1, 16], $V5 = [1, 20], $V6 = [1, 19], $V7 = [6, 7, 8], $V8 = [1, 26], $V9 = [1, 24], $Va = [1, 25], $Vb = [6, 7, 11], $Vc = [1, 6, 13, 15, 16, 19, 22], $Vd = [1, 33], $Ve = [1, 34], $Vf = [1, 6, 7, 11, 13, 15, 16, 19, 22];
  var parser2 = {
    trace: __name(function trace() {
    }, "trace"),
    yy: {},
    symbols_: { "error": 2, "start": 3, "mindMap": 4, "spaceLines": 5, "SPACELINE": 6, "NL": 7, "MINDMAP": 8, "document": 9, "stop": 10, "EOF": 11, "statement": 12, "SPACELIST": 13, "node": 14, "ICON": 15, "CLASS": 16, "nodeWithId": 17, "nodeWithoutId": 18, "NODE_DSTART": 19, "NODE_DESCR": 20, "NODE_DEND": 21, "NODE_ID": 22, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 6: "SPACELINE", 7: "NL", 8: "MINDMAP", 11: "EOF", 13: "SPACELIST", 15: "ICON", 16: "CLASS", 19: "NODE_DSTART", 20: "NODE_DESCR", 21: "NODE_DEND", 22: "NODE_ID" },
    productions_: [0, [3, 1], [3, 2], [5, 1], [5, 2], [5, 2], [4, 2], [4, 3], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [9, 3], [9, 2], [12, 2], [12, 2], [12, 2], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [14, 1], [14, 1], [18, 3], [17, 1], [17, 4]],
    performAction: __name(function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 6:
        case 7:
          return yy;
          break;
        case 8:
          yy.getLogger().trace("Stop NL ");
          break;
        case 9:
          yy.getLogger().trace("Stop EOF ");
          break;
        case 11:
          yy.getLogger().trace("Stop NL2 ");
          break;
        case 12:
          yy.getLogger().trace("Stop EOF2 ");
          break;
        case 15:
          yy.getLogger().info("Node: ", $$[$0].id);
          yy.addNode($$[$0 - 1].length, $$[$0].id, $$[$0].descr, $$[$0].type);
          break;
        case 16:
          yy.getLogger().trace("Icon: ", $$[$0]);
          yy.decorateNode({ icon: $$[$0] });
          break;
        case 17:
        case 21:
          yy.decorateNode({ class: $$[$0] });
          break;
        case 18:
          yy.getLogger().trace("SPACELIST");
          break;
        case 19:
          yy.getLogger().trace("Node: ", $$[$0].id);
          yy.addNode(0, $$[$0].id, $$[$0].descr, $$[$0].type);
          break;
        case 20:
          yy.decorateNode({ icon: $$[$0] });
          break;
        case 25:
          yy.getLogger().trace("node found ..", $$[$0 - 2]);
          this.$ = { id: $$[$0 - 1], descr: $$[$0 - 1], type: yy.getType($$[$0 - 2], $$[$0]) };
          break;
        case 26:
          this.$ = { id: $$[$0], descr: $$[$0], type: yy.nodeType.DEFAULT };
          break;
        case 27:
          yy.getLogger().trace("node found ..", $$[$0 - 3]);
          this.$ = { id: $$[$0 - 3], descr: $$[$0 - 1], type: yy.getType($$[$0 - 2], $$[$0]) };
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: 2, 5: 3, 6: [1, 5], 8: $V0 }, { 1: [3] }, { 1: [2, 1] }, { 4: 6, 6: [1, 7], 7: [1, 8], 8: $V0 }, { 6: $V1, 7: [1, 10], 9: 9, 12: 11, 13: $V2, 14: 14, 15: $V3, 16: $V4, 17: 17, 18: 18, 19: $V5, 22: $V6 }, o($V7, [2, 3]), { 1: [2, 2] }, o($V7, [2, 4]), o($V7, [2, 5]), { 1: [2, 6], 6: $V1, 12: 21, 13: $V2, 14: 14, 15: $V3, 16: $V4, 17: 17, 18: 18, 19: $V5, 22: $V6 }, { 6: $V1, 9: 22, 12: 11, 13: $V2, 14: 14, 15: $V3, 16: $V4, 17: 17, 18: 18, 19: $V5, 22: $V6 }, { 6: $V8, 7: $V9, 10: 23, 11: $Va }, o($Vb, [2, 22], { 17: 17, 18: 18, 14: 27, 15: [1, 28], 16: [1, 29], 19: $V5, 22: $V6 }), o($Vb, [2, 18]), o($Vb, [2, 19]), o($Vb, [2, 20]), o($Vb, [2, 21]), o($Vb, [2, 23]), o($Vb, [2, 24]), o($Vb, [2, 26], { 19: [1, 30] }), { 20: [1, 31] }, { 6: $V8, 7: $V9, 10: 32, 11: $Va }, { 1: [2, 7], 6: $V1, 12: 21, 13: $V2, 14: 14, 15: $V3, 16: $V4, 17: 17, 18: 18, 19: $V5, 22: $V6 }, o($Vc, [2, 14], { 7: $Vd, 11: $Ve }), o($Vf, [2, 8]), o($Vf, [2, 9]), o($Vf, [2, 10]), o($Vb, [2, 15]), o($Vb, [2, 16]), o($Vb, [2, 17]), { 20: [1, 35] }, { 21: [1, 36] }, o($Vc, [2, 13], { 7: $Vd, 11: $Ve }), o($Vf, [2, 11]), o($Vf, [2, 12]), { 21: [1, 37] }, o($Vb, [2, 25]), o($Vb, [2, 27])],
    defaultActions: { 2: [2, 1], 6: [2, 2] },
    parseError: __name(function parseError(str, hash) {
      if (hash.recoverable) {
        this.trace(str);
      } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
      }
    }, "parseError"),
    parse: __name(function parse(input) {
      var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
      var args = lstack.slice.call(arguments, 1);
      var lexer2 = Object.create(this.lexer);
      var sharedState = { yy: {} };
      for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
          sharedState.yy[k] = this.yy[k];
        }
      }
      lexer2.setInput(input, sharedState.yy);
      sharedState.yy.lexer = lexer2;
      sharedState.yy.parser = this;
      if (typeof lexer2.yylloc == "undefined") {
        lexer2.yylloc = {};
      }
      var yyloc = lexer2.yylloc;
      lstack.push(yyloc);
      var ranges = lexer2.options && lexer2.options.ranges;
      if (typeof sharedState.yy.parseError === "function") {
        this.parseError = sharedState.yy.parseError;
      } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
      }
      function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
      }
      __name(popStack, "popStack");
      function lex() {
        var token;
        token = tstack.pop() || lexer2.lex() || EOF;
        if (typeof token !== "number") {
          if (token instanceof Array) {
            tstack = token;
            token = tstack.pop();
          }
          token = self.symbols_[token] || token;
        }
        return token;
      }
      __name(lex, "lex");
      var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
      while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
          action = this.defaultActions[state];
        } else {
          if (symbol === null || typeof symbol == "undefined") {
            symbol = lex();
          }
          action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
          var errStr = "";
          expected = [];
          for (p in table[state]) {
            if (this.terminals_[p] && p > TERROR) {
              expected.push("'" + this.terminals_[p] + "'");
            }
          }
          if (lexer2.showPosition) {
            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
          } else {
            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
          }
          this.parseError(errStr, {
            text: lexer2.match,
            token: this.terminals_[symbol] || symbol,
            line: lexer2.yylineno,
            loc: yyloc,
            expected
          });
        }
        if (action[0] instanceof Array && action.length > 1) {
          throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
          case 1:
            stack.push(symbol);
            vstack.push(lexer2.yytext);
            lstack.push(lexer2.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
              yyleng = lexer2.yyleng;
              yytext = lexer2.yytext;
              yylineno = lexer2.yylineno;
              yyloc = lexer2.yylloc;
              if (recovering > 0) {
                recovering--;
              }
            } else {
              symbol = preErrorSymbol;
              preErrorSymbol = null;
            }
            break;
          case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
              first_line: lstack[lstack.length - (len || 1)].first_line,
              last_line: lstack[lstack.length - 1].last_line,
              first_column: lstack[lstack.length - (len || 1)].first_column,
              last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
              yyval._$.range = [
                lstack[lstack.length - (len || 1)].range[0],
                lstack[lstack.length - 1].range[1]
              ];
            }
            r = this.performAction.apply(yyval, [
              yytext,
              yyleng,
              yylineno,
              sharedState.yy,
              action[1],
              vstack,
              lstack
            ].concat(args));
            if (typeof r !== "undefined") {
              return r;
            }
            if (len) {
              stack = stack.slice(0, -1 * len * 2);
              vstack = vstack.slice(0, -1 * len);
              lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  };
  var lexer = function() {
    var lexer2 = {
      EOF: 1,
      parseError: __name(function parseError(str, hash) {
        if (this.yy.parser) {
          this.yy.parser.parseError(str, hash);
        } else {
          throw new Error(str);
        }
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: __name(function(input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = "";
        this.conditionStack = ["INITIAL"];
        this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        };
        if (this.options.ranges) {
          this.yylloc.range = [0, 0];
        }
        this.offset = 0;
        return this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: __name(function() {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno++;
          this.yylloc.last_line++;
        } else {
          this.yylloc.last_column++;
        }
        if (this.options.ranges) {
          this.yylloc.range[1]++;
        }
        this._input = this._input.slice(1);
        return ch;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: __name(function(ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);
        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (lines.length - 1) {
          this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
        };
        if (this.options.ranges) {
          this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
      }, "unput"),
      // When called from action, caches matched text and appends it on next action
      more: __name(function() {
        this._more = true;
        return this;
      }, "more"),
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: __name(function() {
        if (this.options.backtrack_lexer) {
          this._backtrack = true;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
        return this;
      }, "reject"),
      // retain first n characters of the match
      less: __name(function(n) {
        this.unput(this.match.slice(n));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: __name(function() {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: __name(function() {
        var next = this.match;
        if (next.length < 20) {
          next += this._input.substr(0, 20 - next.length);
        }
        return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: __name(function() {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: __name(function(match, indexed_rule) {
        var token, lines, backup;
        if (this.options.backtrack_lexer) {
          backup = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done
          };
          if (this.options.ranges) {
            backup.yylloc.range = this.yylloc.range.slice(0);
          }
        }
        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno += lines.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
          this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (token) {
          return token;
        } else if (this._backtrack) {
          for (var k in backup) {
            this[k] = backup[k];
          }
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: __name(function() {
        if (this.done) {
          return this.EOF;
        }
        if (!this._input) {
          this.done = true;
        }
        var token, match, tempMatch, index;
        if (!this._more) {
          this.yytext = "";
          this.match = "";
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
          tempMatch = this._input.match(this.rules[rules[i]]);
          if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
            match = tempMatch;
            index = i;
            if (this.options.backtrack_lexer) {
              token = this.test_match(tempMatch, rules[i]);
              if (token !== false) {
                return token;
              } else if (this._backtrack) {
                match = false;
                continue;
              } else {
                return false;
              }
            } else if (!this.options.flex) {
              break;
            }
          }
        }
        if (match) {
          token = this.test_match(match, rules[index]);
          if (token !== false) {
            return token;
          }
          return false;
        }
        if (this._input === "") {
          return this.EOF;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
      }, "next"),
      // return next match that has a token
      lex: __name(function lex() {
        var r = this.next();
        if (r) {
          return r;
        } else {
          return this.lex();
        }
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: __name(function begin(condition) {
        this.conditionStack.push(condition);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: __name(function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
          return this.conditionStack.pop();
        } else {
          return this.conditionStack[0];
        }
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: __name(function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
          return this.conditions["INITIAL"].rules;
        }
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: __name(function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
          return this.conditionStack[n];
        } else {
          return "INITIAL";
        }
      }, "topState"),
      // alias for begin(condition)
      pushState: __name(function pushState(condition) {
        this.begin(condition);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: __name(function stateStackSize() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": true },
      performAction: __name(function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
        var YYSTATE = YY_START;
        switch ($avoiding_name_collisions) {
          case 0:
            yy.getLogger().trace("Found comment", yy_.yytext);
            return 6;
            break;
          case 1:
            return 8;
            break;
          case 2:
            this.begin("CLASS");
            break;
          case 3:
            this.popState();
            return 16;
            break;
          case 4:
            this.popState();
            break;
          case 5:
            yy.getLogger().trace("Begin icon");
            this.begin("ICON");
            break;
          case 6:
            yy.getLogger().trace("SPACELINE");
            return 6;
            break;
          case 7:
            return 7;
            break;
          case 8:
            return 15;
            break;
          case 9:
            yy.getLogger().trace("end icon");
            this.popState();
            break;
          case 10:
            yy.getLogger().trace("Exploding node");
            this.begin("NODE");
            return 19;
            break;
          case 11:
            yy.getLogger().trace("Cloud");
            this.begin("NODE");
            return 19;
            break;
          case 12:
            yy.getLogger().trace("Explosion Bang");
            this.begin("NODE");
            return 19;
            break;
          case 13:
            yy.getLogger().trace("Cloud Bang");
            this.begin("NODE");
            return 19;
            break;
          case 14:
            this.begin("NODE");
            return 19;
            break;
          case 15:
            this.begin("NODE");
            return 19;
            break;
          case 16:
            this.begin("NODE");
            return 19;
            break;
          case 17:
            this.begin("NODE");
            return 19;
            break;
          case 18:
            return 13;
            break;
          case 19:
            return 22;
            break;
          case 20:
            return 11;
            break;
          case 21:
            this.begin("NSTR2");
            break;
          case 22:
            return "NODE_DESCR";
            break;
          case 23:
            this.popState();
            break;
          case 24:
            yy.getLogger().trace("Starting NSTR");
            this.begin("NSTR");
            break;
          case 25:
            yy.getLogger().trace("description:", yy_.yytext);
            return "NODE_DESCR";
            break;
          case 26:
            this.popState();
            break;
          case 27:
            this.popState();
            yy.getLogger().trace("node end ))");
            return "NODE_DEND";
            break;
          case 28:
            this.popState();
            yy.getLogger().trace("node end )");
            return "NODE_DEND";
            break;
          case 29:
            this.popState();
            yy.getLogger().trace("node end ...", yy_.yytext);
            return "NODE_DEND";
            break;
          case 30:
            this.popState();
            yy.getLogger().trace("node end ((");
            return "NODE_DEND";
            break;
          case 31:
            this.popState();
            yy.getLogger().trace("node end (-");
            return "NODE_DEND";
            break;
          case 32:
            this.popState();
            yy.getLogger().trace("node end (-");
            return "NODE_DEND";
            break;
          case 33:
            this.popState();
            yy.getLogger().trace("node end ((");
            return "NODE_DEND";
            break;
          case 34:
            this.popState();
            yy.getLogger().trace("node end ((");
            return "NODE_DEND";
            break;
          case 35:
            yy.getLogger().trace("Long description:", yy_.yytext);
            return 20;
            break;
          case 36:
            yy.getLogger().trace("Long description:", yy_.yytext);
            return 20;
            break;
        }
      }, "anonymous"),
      rules: [/^(?:\s*%%.*)/i, /^(?:mindmap\b)/i, /^(?::::)/i, /^(?:.+)/i, /^(?:\n)/i, /^(?:::icon\()/i, /^(?:[\s]+[\n])/i, /^(?:[\n]+)/i, /^(?:[^\)]+)/i, /^(?:\))/i, /^(?:-\))/i, /^(?:\(-)/i, /^(?:\)\))/i, /^(?:\))/i, /^(?:\(\()/i, /^(?:\{\{)/i, /^(?:\()/i, /^(?:\[)/i, /^(?:[\s]+)/i, /^(?:[^\(\[\n\)\{\}]+)/i, /^(?:$)/i, /^(?:["][`])/i, /^(?:[^`"]+)/i, /^(?:[`]["])/i, /^(?:["])/i, /^(?:[^"]+)/i, /^(?:["])/i, /^(?:[\)]\))/i, /^(?:[\)])/i, /^(?:[\]])/i, /^(?:\}\})/i, /^(?:\(-)/i, /^(?:-\))/i, /^(?:\(\()/i, /^(?:\()/i, /^(?:[^\)\]\(\}]+)/i, /^(?:.+(?!\(\())/i],
      conditions: { "CLASS": { "rules": [3, 4], "inclusive": false }, "ICON": { "rules": [8, 9], "inclusive": false }, "NSTR2": { "rules": [22, 23], "inclusive": false }, "NSTR": { "rules": [25, 26], "inclusive": false }, "NODE": { "rules": [21, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "inclusive": false }, "INITIAL": { "rules": [0, 1, 2, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "inclusive": true } }
    };
    return lexer2;
  }();
  parser2.lexer = lexer;
  function Parser() {
    this.yy = {};
  }
  __name(Parser, "Parser");
  Parser.prototype = parser2;
  parser2.Parser = Parser;
  return new Parser();
}();
parser.parser = parser;
var mindmap_default = parser;
var nodeType = {
  DEFAULT: 0,
  NO_BORDER: 0,
  ROUNDED_RECT: 1,
  RECT: 2,
  CIRCLE: 3,
  CLOUD: 4,
  BANG: 5,
  HEXAGON: 6
};
var _a;
var MindmapDB = (_a = class {
  constructor() {
    this.nodes = [];
    this.count = 0;
    this.elements = {};
    this.getLogger = this.getLogger.bind(this);
    this.nodeType = nodeType;
    this.clear();
    this.getType = this.getType.bind(this);
    this.getMindmap = this.getMindmap.bind(this);
    this.getElementById = this.getElementById.bind(this);
    this.getParent = this.getParent.bind(this);
    this.getMindmap = this.getMindmap.bind(this);
    this.addNode = this.addNode.bind(this);
    this.decorateNode = this.decorateNode.bind(this);
  }
  clear() {
    this.nodes = [];
    this.count = 0;
    this.elements = {};
  }
  getParent(level) {
    for (let i = this.nodes.length - 1; i >= 0; i--) {
      if (this.nodes[i].level < level) {
        return this.nodes[i];
      }
    }
    return null;
  }
  getMindmap() {
    return this.nodes.length > 0 ? this.nodes[0] : null;
  }
  addNode(level, id, descr, type) {
    var _a2, _b;
    log.info("addNode", level, id, descr, type);
    const conf = getConfig2();
    let padding = ((_a2 = conf.mindmap) == null ? void 0 : _a2.padding) ?? defaultConfig_default.mindmap.padding;
    switch (type) {
      case this.nodeType.ROUNDED_RECT:
      case this.nodeType.RECT:
      case this.nodeType.HEXAGON:
        padding *= 2;
        break;
    }
    const node = {
      id: this.count++,
      nodeId: sanitizeText(id, conf),
      level,
      descr: sanitizeText(descr, conf),
      type,
      children: [],
      width: ((_b = conf.mindmap) == null ? void 0 : _b.maxNodeWidth) ?? defaultConfig_default.mindmap.maxNodeWidth,
      padding
    };
    const parent = this.getParent(level);
    if (parent) {
      parent.children.push(node);
      this.nodes.push(node);
    } else {
      if (this.nodes.length === 0) {
        this.nodes.push(node);
      } else {
        throw new Error(
          `There can be only one root. No parent could be found for ("${node.descr}")`
        );
      }
    }
  }
  getType(startStr, endStr) {
    log.debug("In get type", startStr, endStr);
    switch (startStr) {
      case "[":
        return this.nodeType.RECT;
      case "(":
        return endStr === ")" ? this.nodeType.ROUNDED_RECT : this.nodeType.CLOUD;
      case "((":
        return this.nodeType.CIRCLE;
      case ")":
        return this.nodeType.CLOUD;
      case "))":
        return this.nodeType.BANG;
      case "{{":
        return this.nodeType.HEXAGON;
      default:
        return this.nodeType.DEFAULT;
    }
  }
  setElementForId(id, element) {
    this.elements[id] = element;
  }
  getElementById(id) {
    return this.elements[id];
  }
  decorateNode(decoration) {
    if (!decoration) {
      return;
    }
    const config = getConfig2();
    const node = this.nodes[this.nodes.length - 1];
    if (decoration.icon) {
      node.icon = sanitizeText(decoration.icon, config);
    }
    if (decoration.class) {
      node.class = sanitizeText(decoration.class, config);
    }
  }
  type2Str(type) {
    switch (type) {
      case this.nodeType.DEFAULT:
        return "no-border";
      case this.nodeType.RECT:
        return "rect";
      case this.nodeType.ROUNDED_RECT:
        return "rounded-rect";
      case this.nodeType.CIRCLE:
        return "circle";
      case this.nodeType.CLOUD:
        return "cloud";
      case this.nodeType.BANG:
        return "bang";
      case this.nodeType.HEXAGON:
        return "hexgon";
      default:
        return "no-border";
    }
  }
  getLogger() {
    return log;
  }
}, __name(_a, "MindmapDB"), _a);
var MAX_SECTIONS = 12;
var defaultBkg = __name(function(db, elem, node, section) {
  const rd = 5;
  elem.append("path").attr("id", "node-" + node.id).attr("class", "node-bkg node-" + db.type2Str(node.type)).attr(
    "d",
    `M0 ${node.height - rd} v${-node.height + 2 * rd} q0,-5 5,-5 h${node.width - 2 * rd} q5,0 5,5 v${node.height - rd} H0 Z`
  );
  elem.append("line").attr("class", "node-line-" + section).attr("x1", 0).attr("y1", node.height).attr("x2", node.width).attr("y2", node.height);
}, "defaultBkg");
var rectBkg = __name(function(db, elem, node) {
  elem.append("rect").attr("id", "node-" + node.id).attr("class", "node-bkg node-" + db.type2Str(node.type)).attr("height", node.height).attr("width", node.width);
}, "rectBkg");
var cloudBkg = __name(function(db, elem, node) {
  const w = node.width;
  const h = node.height;
  const r1 = 0.15 * w;
  const r2 = 0.25 * w;
  const r3 = 0.35 * w;
  const r4 = 0.2 * w;
  elem.append("path").attr("id", "node-" + node.id).attr("class", "node-bkg node-" + db.type2Str(node.type)).attr(
    "d",
    `M0 0 a${r1},${r1} 0 0,1 ${w * 0.25},${-1 * w * 0.1}
      a${r3},${r3} 1 0,1 ${w * 0.4},${-1 * w * 0.1}
      a${r2},${r2} 1 0,1 ${w * 0.35},${1 * w * 0.2}

      a${r1},${r1} 1 0,1 ${w * 0.15},${1 * h * 0.35}
      a${r4},${r4} 1 0,1 ${-1 * w * 0.15},${1 * h * 0.65}

      a${r2},${r1} 1 0,1 ${-1 * w * 0.25},${w * 0.15}
      a${r3},${r3} 1 0,1 ${-1 * w * 0.5},${0}
      a${r1},${r1} 1 0,1 ${-1 * w * 0.25},${-1 * w * 0.15}

      a${r1},${r1} 1 0,1 ${-1 * w * 0.1},${-1 * h * 0.35}
      a${r4},${r4} 1 0,1 ${w * 0.1},${-1 * h * 0.65}

    H0 V0 Z`
  );
}, "cloudBkg");
var bangBkg = __name(function(db, elem, node) {
  const w = node.width;
  const h = node.height;
  const r = 0.15 * w;
  elem.append("path").attr("id", "node-" + node.id).attr("class", "node-bkg node-" + db.type2Str(node.type)).attr(
    "d",
    `M0 0 a${r},${r} 1 0,0 ${w * 0.25},${-1 * h * 0.1}
      a${r},${r} 1 0,0 ${w * 0.25},${0}
      a${r},${r} 1 0,0 ${w * 0.25},${0}
      a${r},${r} 1 0,0 ${w * 0.25},${1 * h * 0.1}

      a${r},${r} 1 0,0 ${w * 0.15},${1 * h * 0.33}
      a${r * 0.8},${r * 0.8} 1 0,0 ${0},${1 * h * 0.34}
      a${r},${r} 1 0,0 ${-1 * w * 0.15},${1 * h * 0.33}

      a${r},${r} 1 0,0 ${-1 * w * 0.25},${h * 0.15}
      a${r},${r} 1 0,0 ${-1 * w * 0.25},${0}
      a${r},${r} 1 0,0 ${-1 * w * 0.25},${0}
      a${r},${r} 1 0,0 ${-1 * w * 0.25},${-1 * h * 0.15}

      a${r},${r} 1 0,0 ${-1 * w * 0.1},${-1 * h * 0.33}
      a${r * 0.8},${r * 0.8} 1 0,0 ${0},${-1 * h * 0.34}
      a${r},${r} 1 0,0 ${w * 0.1},${-1 * h * 0.33}

    H0 V0 Z`
  );
}, "bangBkg");
var circleBkg = __name(function(db, elem, node) {
  elem.append("circle").attr("id", "node-" + node.id).attr("class", "node-bkg node-" + db.type2Str(node.type)).attr("r", node.width / 2);
}, "circleBkg");
function insertPolygonShape(parent, w, h, points, node) {
  return parent.insert("polygon", ":first-child").attr(
    "points",
    points.map(function(d) {
      return d.x + "," + d.y;
    }).join(" ")
  ).attr("transform", "translate(" + (node.width - w) / 2 + ", " + h + ")");
}
__name(insertPolygonShape, "insertPolygonShape");
var hexagonBkg = __name(function(_db, elem, node) {
  const h = node.height;
  const f = 4;
  const m = h / f;
  const w = node.width - node.padding + 2 * m;
  const points = [
    { x: m, y: 0 },
    { x: w - m, y: 0 },
    { x: w, y: -h / 2 },
    { x: w - m, y: -h },
    { x: m, y: -h },
    { x: 0, y: -h / 2 }
  ];
  insertPolygonShape(elem, w, h, points, node);
}, "hexagonBkg");
var roundedRectBkg = __name(function(db, elem, node) {
  elem.append("rect").attr("id", "node-" + node.id).attr("class", "node-bkg node-" + db.type2Str(node.type)).attr("height", node.height).attr("rx", node.padding).attr("ry", node.padding).attr("width", node.width);
}, "roundedRectBkg");
var drawNode = __name(async function(db, elem, node, fullSection, conf) {
  const htmlLabels = conf.htmlLabels;
  const section = fullSection % (MAX_SECTIONS - 1);
  const nodeElem = elem.append("g");
  node.section = section;
  let sectionClass = "section-" + section;
  if (section < 0) {
    sectionClass += " section-root";
  }
  nodeElem.attr("class", (node.class ? node.class + " " : "") + "mindmap-node " + sectionClass);
  const bkgElem = nodeElem.append("g");
  const textElem = nodeElem.append("g");
  const description = node.descr.replace(/(<br\/*>)/g, "\n");
  await createText(
    textElem,
    description,
    {
      useHtmlLabels: htmlLabels,
      width: node.width,
      classes: "mindmap-node-label"
    },
    conf
  );
  if (!htmlLabels) {
    textElem.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle");
  }
  const bbox = textElem.node().getBBox();
  const [fontSize] = parseFontSize(conf.fontSize);
  node.height = bbox.height + fontSize * 1.1 * 0.5 + node.padding;
  node.width = bbox.width + 2 * node.padding;
  if (node.icon) {
    if (node.type === db.nodeType.CIRCLE) {
      node.height += 50;
      node.width += 50;
      const icon = nodeElem.append("foreignObject").attr("height", "50px").attr("width", node.width).attr("style", "text-align: center;");
      icon.append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + section + " " + node.icon);
      textElem.attr(
        "transform",
        "translate(" + node.width / 2 + ", " + (node.height / 2 - 1.5 * node.padding) + ")"
      );
    } else {
      node.width += 50;
      const orgHeight = node.height;
      node.height = Math.max(orgHeight, 60);
      const heightDiff = Math.abs(node.height - orgHeight);
      const icon = nodeElem.append("foreignObject").attr("width", "60px").attr("height", node.height).attr("style", "text-align: center;margin-top:" + heightDiff / 2 + "px;");
      icon.append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + section + " " + node.icon);
      textElem.attr(
        "transform",
        "translate(" + (25 + node.width / 2) + ", " + (heightDiff / 2 + node.padding / 2) + ")"
      );
    }
  } else {
    if (!htmlLabels) {
      const dx = node.width / 2;
      const dy = node.padding / 2;
      textElem.attr("transform", "translate(" + dx + ", " + dy + ")");
    } else {
      const dx = (node.width - bbox.width) / 2;
      const dy = (node.height - bbox.height) / 2;
      textElem.attr("transform", "translate(" + dx + ", " + dy + ")");
    }
  }
  switch (node.type) {
    case db.nodeType.DEFAULT:
      defaultBkg(db, bkgElem, node, section);
      break;
    case db.nodeType.ROUNDED_RECT:
      roundedRectBkg(db, bkgElem, node, section);
      break;
    case db.nodeType.RECT:
      rectBkg(db, bkgElem, node, section);
      break;
    case db.nodeType.CIRCLE:
      bkgElem.attr("transform", "translate(" + node.width / 2 + ", " + +node.height / 2 + ")");
      circleBkg(db, bkgElem, node, section);
      break;
    case db.nodeType.CLOUD:
      cloudBkg(db, bkgElem, node, section);
      break;
    case db.nodeType.BANG:
      bangBkg(db, bkgElem, node, section);
      break;
    case db.nodeType.HEXAGON:
      hexagonBkg(db, bkgElem, node, section);
      break;
  }
  db.setElementForId(node.id, nodeElem);
  return node.height;
}, "drawNode");
var positionNode = __name(function(db, node) {
  const nodeElem = db.getElementById(node.id);
  const x = node.x || 0;
  const y = node.y || 0;
  nodeElem.attr("transform", "translate(" + x + "," + y + ")");
}, "positionNode");
cytoscape.use(import_cytoscape_cose_bilkent.default);
async function drawNodes(db, svg, mindmap, section, conf) {
  await drawNode(db, svg, mindmap, section, conf);
  if (mindmap.children) {
    await Promise.all(
      mindmap.children.map(
        (child, index) => drawNodes(db, svg, child, section < 0 ? index : section, conf)
      )
    );
  }
}
__name(drawNodes, "drawNodes");
function drawEdges(edgesEl, cy) {
  cy.edges().map((edge, id) => {
    const data = edge.data();
    if (edge[0]._private.bodyBounds) {
      const bounds = edge[0]._private.rscratch;
      log.trace("Edge: ", id, data);
      edgesEl.insert("path").attr(
        "d",
        `M ${bounds.startX},${bounds.startY} L ${bounds.midX},${bounds.midY} L${bounds.endX},${bounds.endY} `
      ).attr("class", "edge section-edge-" + data.section + " edge-depth-" + data.depth);
    }
  });
}
__name(drawEdges, "drawEdges");
function addNodes(mindmap, cy, conf, level) {
  cy.add({
    group: "nodes",
    data: {
      id: mindmap.id.toString(),
      labelText: mindmap.descr,
      height: mindmap.height,
      width: mindmap.width,
      level,
      nodeId: mindmap.id,
      padding: mindmap.padding,
      type: mindmap.type
    },
    position: {
      x: mindmap.x,
      y: mindmap.y
    }
  });
  if (mindmap.children) {
    mindmap.children.forEach((child) => {
      addNodes(child, cy, conf, level + 1);
      cy.add({
        group: "edges",
        data: {
          id: `${mindmap.id}_${child.id}`,
          source: mindmap.id,
          target: child.id,
          depth: level,
          section: child.section
        }
      });
    });
  }
}
__name(addNodes, "addNodes");
function layoutMindmap(node, conf) {
  return new Promise((resolve) => {
    const renderEl = select_default("body").append("div").attr("id", "cy").attr("style", "display:none");
    const cy = cytoscape({
      container: document.getElementById("cy"),
      // container to render in
      style: [
        {
          selector: "edge",
          style: {
            "curve-style": "bezier"
          }
        }
      ]
    });
    renderEl.remove();
    addNodes(node, cy, conf, 0);
    cy.nodes().forEach(function(n) {
      n.layoutDimensions = () => {
        const data = n.data();
        return { w: data.width, h: data.height };
      };
    });
    cy.layout({
      name: "cose-bilkent",
      // @ts-ignore Types for cose-bilkent are not correct?
      quality: "proof",
      styleEnabled: false,
      animate: false
    }).run();
    cy.ready((e) => {
      log.info("Ready", e);
      resolve(cy);
    });
  });
}
__name(layoutMindmap, "layoutMindmap");
function positionNodes(db, cy) {
  cy.nodes().map((node, id) => {
    const data = node.data();
    data.x = node.position().x;
    data.y = node.position().y;
    positionNode(db, data);
    const el = db.getElementById(data.nodeId);
    log.info("id:", id, "Position: (", node.position().x, ", ", node.position().y, ")", data);
    el.attr(
      "transform",
      `translate(${node.position().x - data.width / 2}, ${node.position().y - data.height / 2})`
    );
    el.attr("attr", `apa-${id})`);
  });
}
__name(positionNodes, "positionNodes");
var draw = __name(async (text, id, _version, diagObj) => {
  var _a2, _b;
  log.debug("Rendering mindmap diagram\n" + text);
  const db = diagObj.db;
  const mm = db.getMindmap();
  if (!mm) {
    return;
  }
  const conf = getConfig2();
  conf.htmlLabels = false;
  const svg = selectSvgElement(id);
  const edgesElem = svg.append("g");
  edgesElem.attr("class", "mindmap-edges");
  const nodesElem = svg.append("g");
  nodesElem.attr("class", "mindmap-nodes");
  await drawNodes(db, nodesElem, mm, -1, conf);
  const cy = await layoutMindmap(mm, conf);
  drawEdges(edgesElem, cy);
  positionNodes(db, cy);
  setupGraphViewbox(
    void 0,
    svg,
    ((_a2 = conf.mindmap) == null ? void 0 : _a2.padding) ?? defaultConfig_default.mindmap.padding,
    ((_b = conf.mindmap) == null ? void 0 : _b.useMaxWidth) ?? defaultConfig_default.mindmap.useMaxWidth
  );
}, "draw");
var mindmapRenderer_default = {
  draw
};
var genSections = __name((options) => {
  let sections = "";
  for (let i = 0; i < options.THEME_COLOR_LIMIT; i++) {
    options["lineColor" + i] = options["lineColor" + i] || options["cScaleInv" + i];
    if (is_dark_default(options["lineColor" + i])) {
      options["lineColor" + i] = lighten_default(options["lineColor" + i], 20);
    } else {
      options["lineColor" + i] = darken_default(options["lineColor" + i], 20);
    }
  }
  for (let i = 0; i < options.THEME_COLOR_LIMIT; i++) {
    const sw = "" + (17 - 3 * i);
    sections += `
    .section-${i - 1} rect, .section-${i - 1} path, .section-${i - 1} circle, .section-${i - 1} polygon, .section-${i - 1} path  {
      fill: ${options["cScale" + i]};
    }
    .section-${i - 1} text {
     fill: ${options["cScaleLabel" + i]};
    }
    .node-icon-${i - 1} {
      font-size: 40px;
      color: ${options["cScaleLabel" + i]};
    }
    .section-edge-${i - 1}{
      stroke: ${options["cScale" + i]};
    }
    .edge-depth-${i - 1}{
      stroke-width: ${sw};
    }
    .section-${i - 1} line {
      stroke: ${options["cScaleInv" + i]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
  }
  return sections;
}, "genSections");
var getStyles = __name((options) => `
  .edge {
    stroke-width: 3;
  }
  ${genSections(options)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${options.git0};
  }
  .section-root text {
    fill: ${options.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .mindmap-node-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
`, "getStyles");
var styles_default = getStyles;
var diagram = {
  get db() {
    return new MindmapDB();
  },
  renderer: mindmapRenderer_default,
  parser: mindmap_default,
  styles: styles_default
};
export {
  diagram
};
//# sourceMappingURL=mindmap-definition-6CBA2TL7-JXMDA5D7.js.map
