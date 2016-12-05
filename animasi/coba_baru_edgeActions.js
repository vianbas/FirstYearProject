/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${playbuttonb}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.$("Animasi_mendel").show();
         
         sym.getSymbol("Animasi_mendel").play();
         
         // Show an element 
         sym.$("pausebutton").show();
         
         // Hide an element 
         sym.$("playbuttonb").hide();
         
         // Hide an element 
         sym.$("Home_pa").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pausebutton}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getSymbol("Animasi_mendel").stop();
         
         // Hide an element 
         sym.$("pausebutton").hide();
         
         // Show an element 
         sym.$("playbuttonb").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${reload}", "click", function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("Animasi_mendel").play(0);
         
         // Show an element 
         sym.$("pausebutton").show();
         
         // Hide an element 
         sym.$("playbuttonb").hide();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'kotak'
   (function(symbolName) {   
   
   })("kotak");
   //Edge symbol end:'kotak'

   //=========================================================
   
   //Edge symbol: 'Bunga_Putih'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("Bunga_Putih");
   //Edge symbol end:'Bunga_Putih'

   //=========================================================
   
   //Edge symbol: 'B_ungu'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1155, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("B_ungu");
   //Edge symbol end:'B_ungu'

   //=========================================================
   
   //Edge symbol: 'Animasi_mendel'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text2}", "click", function(sym, e) {
         
         // Set a toggle to hide or show an element 
         if (sym.getSymbol("Gen_R_P").$("Text24").is(":visible")) {
         	sym.getSymbol("Gen_R_P").$("Text24").hide();
         	
         	sym.getComposition().getStage().getSymbol("Animasi_mendel").getSymbol("Gen_R_P").playReverse();
         	
         } else {
         	sym.getSymbol("Gen_R_P").$("Text24").show();
         	
         	sym.getSymbol("Gen_R_P").play();
         	
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text3}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.getSymbol("Penampakan").$("Text24").is(":visible")) {
         	sym.getSymbol("Penampakan").$("Text24").hide();
         	
         	sym.getSymbol("Penampakan").playReverse();
         	
         } else {
         	sym.getSymbol("Penampakan").$("Text24").show();
         	
         	sym.getSymbol("Penampakan").play();
         	
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text3Copy}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.getSymbol("Sugen_tek").$("Text24Copy").is(":visible")) {
         	sym.getSymbol("Sugen_tek").$("Text24Copy").hide();
         	
         	sym.getSymbol("Sugen_tek").playReverse();
         	
         } else {
         	sym.getSymbol("Sugen_tek").$("Text24Copy").show;
         	
         	sym.getSymbol("Sugen_tek").play();
         	
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text7}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.getSymbol("Gamet").$("Text24Copy2").is(":visible")) {
         	sym.getSymbol("Gamet").$("Text24Copy2").hide();
         	
         	sym.getSymbol("Gamet").playReverse();
         	
         } else {
         	sym.getSymbol("Gamet").$("Text24Copy2").show();
         	
         	sym.getSymbol("Gamet").play();
         	
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text10}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.getSymbol("Fenotipe_").$("Text24Copy3").is(":visible")) {
         	sym.getSymbol("Fenotipe_").$("Text24Copy3").hide();
         	
         	sym.getSymbol("Fenotipe_").playReverse();
         	
         } else {
         	sym.getSymbol("Fenotipe_").$("Text24Copy3").show();
         	
         	sym.getSymbol("Fenotipe_").play();
         	
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text16}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.getSymbol("Gamet2").$("Text24Copy2").is(":visible")) {
         	sym.getSymbol("Gamet2").$("Text24Copy2").hide();
         	
         	sym.getSymbol("Gamet2").playReverse();
         	
         } else {
         	sym.getSymbol("Gamet2").$("Text24Copy2").show();
         	
         	sym.getSymbol("Gamet2").play();
         	
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text13}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.getSymbol("Sugen_tek2").$("Text24Copy").is(":visible")) {
         	sym.getSymbol("Sugen_tek2").$("Text24Copy").hide();
         	
         	sym.getSymbol("Sugen_tek2").playReverse();
         	
         } else {
         	sym.getSymbol("Sugen_tek2").$("Text24Copy").show();
         	
         	sym.getSymbol("Sugen_tek2").play();
         	
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text11}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.getSymbol("Penampakan2").$("Text24").is(":visible")) {
         	sym.getSymbol("Penampakan2").$("Text24").hide();
         	sym.getSymbol("Penampakan2").playReverse();
         
         } else {
         	sym.getSymbol("Penampakan2").$("Text24").show();
         
         	sym.getSymbol("Penampakan2").play();
         
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text20}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.getSymbol("Gen_f2").$("Text24Copy4").is(":visible")) {
         	sym.getSymbol("Gen_f2").$("Text24Copy4").hide();
         	sym.getSymbol("Gen_f2").playReverse();
         	
         } else {
         	sym.getSymbol("Gen_f2").$("Text24Copy4").show();
         	sym.getSymbol("Gen_f2").play();
         	
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text22Copy}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.getSymbol("betina").$("Text23Copy").is(":visible")) {
         	sym.getSymbol("betina").$("Text23Copy").hide();
         	
         	sym.getSymbol("betina").playReverse();
         	
         } else {
         	sym.getSymbol("betina").$("Text23Copy").show();
         	
         	sym.getSymbol("betina").play();
         	
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text22}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.getSymbol("jantan").$("Text23").is(":visible")) {
         	sym.getSymbol("jantan").$("Text23").hide();
         	
         	sym.getSymbol("jantan").playReverse();
         	
         } else {
         	sym.getSymbol("jantan").$("Text23").show();
         	
         	sym.getSymbol("jantan").play();
         	
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle9}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.getSymbol("Genotipe").$("Text28").is(":visible")) {
         	sym.getSymbol("Genotipe").$("Text28").hide();
         	
         	sym.getSymbol("Genotipe").playReverse();
         	
         } else {
         	sym.getSymbol("Genotipe").$("Text28").show();
         	
         	sym.getSymbol("Genotipe").play();
         	
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle10}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.getSymbol("Phenytp").$("Text24").is(":visible")) {
         	sym.getSymbol("Phenytp").$("Text24").hide();
         	
         	sym.getSymbol("Phenytp").playReverse();
         	
         } else {
         	sym.getSymbol("Phenytp").$("Text24").show();
         	
         	sym.getSymbol("Phenytp").play();
         	
         }
         

      });
      //Edge binding end

   })("Animasi_mendel");
   //Edge symbol end:'Animasi_mendel'

   //=========================================================
   
   //Edge symbol: 'Generasi_P'
   (function(symbolName) {   
   
   })("Generasi_P");
   //Edge symbol end:'Generasi_P'

   //=========================================================
   
   //Edge symbol: 'Gen_R_P'
   (function(symbolName) {   
   
   })("Gen_R_P");
   //Edge symbol end:'Gen_R_P'

   //=========================================================
   
   //Edge symbol: 'Penampakan'
   (function(symbolName) {   
   
   })("Penampakan");
   //Edge symbol end:'Penampakan'

   //=========================================================
   
   //Edge symbol: 'Sugen_tek'
   (function(symbolName) {   
   
   })("Sugen_tek");
   //Edge symbol end:'Sugen_tek'

   //=========================================================
   
   //Edge symbol: 'Gamet'
   (function(symbolName) {   
   
   })("Gamet");
   //Edge symbol end:'Gamet'

   //=========================================================
   
   //Edge symbol: 'Fenotipe_'
   (function(symbolName) {   
   
   })("Fenotipe_");
   //Edge symbol end:'Fenotipe_'

   //=========================================================
   
   //Edge symbol: 'Gen_f2'
   (function(symbolName) {   
   
   })("Gen_f2");
   //Edge symbol end:'Gen_f2'

   //=========================================================
   
   //Edge symbol: 'betina'
   (function(symbolName) {   
   
   })("betina");
   //Edge symbol end:'betina'

   //=========================================================
   
   //Edge symbol: 'jantan'
   (function(symbolName) {   
   
   })("jantan");
   //Edge symbol end:'jantan'

   //=========================================================
   
   //Edge symbol: 'Phenytp'
   (function(symbolName) {   
   
   })("Phenytp");
   //Edge symbol end:'Phenytp'

   //=========================================================
   
   //Edge symbol: 'Genotipe'
   (function(symbolName) {   
   
   })("Genotipe");
   //Edge symbol end:'Genotipe'

   //=========================================================
   
   //Edge symbol: 'Home_pa'
   (function(symbolName) {   
   
   })("Home_pa");
   //Edge symbol end:'Home_pa'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-112388943");