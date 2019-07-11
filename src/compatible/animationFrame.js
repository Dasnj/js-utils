/**
 * @desc AnimationFrame兼容
 */

const animationFrame = () {
    window.cancelAnimationFrame = () {
        return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (id) {
            return window.clearTimeout(id);
        };
    }();
    window.requestAnimationFrame = () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
            return window.setTimeout(callback, 1000 / 60);
        };
    }();
}
