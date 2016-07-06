var Lucy = (function () {
  var _fetchedInbox = false;
  function init()
  {
    autoFocus();
  }

  function autoFocus()
  {
    if (!("autofocus" in document.createElement("input")))
    {
      setTimeout(function() { $(':input[autofocus]').first().focus(); }, 20);
    }
  }
  
  function htmlEscape(s)
  {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function getDatePart(dt)
  {
    var newDate = new Date(dt.valueOf());
    newDate.setHours(0,0,0,0);
    return newDate;
  }

  function addDays(dt, days)
  {
    var newDateTime = new Date(dt.valueOf());
    newDateTime.setDate(newDateTime.getDate() + days);
    return newDateTime;
  }

  return {
    init: init,
    htmlEscape: htmlEscape,
    getDatePart: getDatePart,
    addDays: addDays
  };
})();
