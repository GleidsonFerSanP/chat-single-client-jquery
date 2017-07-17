 var Utils = function() {
     this.generateStyle = function(config) {
         var css = ['style=\"']
         for (var key in config) {
             css.push(key + ':' + config[key]);
             css.push(';');
         }
         css.push('\"');
         return css.join("");
     }

     this.formateDate = function(date) {
         var monthNames = [
             "Janeiro", "Fevereiro", "Mar\u00e7o",
             "Abril", "Maio", "Junho", "Julho",
             "Agosto", "Setembro", "Outubro",
             "Novembro", "Dezembro"
         ];

         var day = date.getDate();
         var monthIndex = date.getMonth();
         var year = date.getFullYear();
         var hour = date.getHours();
         var minutes = date.getMinutes();
         var seconds = date.getSeconds();

         return day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + hour + ':' + minutes + ':' + seconds;
     }
 };