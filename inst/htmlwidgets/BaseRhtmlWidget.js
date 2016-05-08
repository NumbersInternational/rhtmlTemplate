// Generated by CoffeeScript 1.8.0
var BaseRhtmlWidget;

BaseRhtmlWidget = (function() {
  BaseRhtmlWidget.templateIndex = -1;

  function BaseRhtmlWidget() {
    BaseRhtmlWidget.templateIndex++;
  }

  BaseRhtmlWidget.prototype.setConfig = function(config) {
    this.config = config;
    if (!this.config['table-id']) {
      this.config['table-id'] = "rhtmlwidget-" + Template.templateIndex;
    }
    return this._processConfig();
  };

  BaseRhtmlWidget.prototype.draw = function() {
    this._manipulateRootElementSize();
    this._addRootSvgToRootElement();
    return this._redraw();
  };

  BaseRhtmlWidget.prototype.resize = function(width, height) {};

  BaseRhtmlWidget.prototype._processConfig = function() {
    throw new Error('Must override _processConfig in child class of BaseRhtmlWidget');
  };

  BaseRhtmlWidget.prototype._redraw = function() {
    throw new Error('Must override _redraw in child class of BaseRhtmlWidget');
  };

  BaseRhtmlWidget.prototype._manipulateRootElementSize = function() {
    $(this.rootElement).attr('style', '');
    if (this.config['resizable']) {
      return $(this.rootElement).width('100%').height('100%');
    } else {
      return $(this.rootElement).width(this.initialWidth).height(this.initialHeight);
    }
  };

  BaseRhtmlWidget.prototype._addRootSvgToRootElement = function() {
    var anonSvg;
    anonSvg = $('<svg class="rhtmlwidget-outer-svg">').addClass(this.config['table-id']).attr('id', this.config['table-id']).attr('width', '100%').attr('height', '100%');
    $(this.rootElement).append(anonSvg);
    this.outerSvg = d3.select(anonSvg[0]);
    document.getElementsByClassName("rhtmlwidget-outer-svg")[0].setAttribute('viewBox', "0 0 " + this.initialWidth + " " + this.initialHeight);
    if (this.config['preserveAspectRatio'] != null) {
      document.getElementsByClassName("rhtmlwidget-outer-svg")[0].setAttribute('preserveAspectRatio', this.config['preserveAspectRatio']);
    }
    return null;
  };

  return BaseRhtmlWidget;

})();
