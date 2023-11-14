import $ from "../core";

$.prototype.animateOverTime = function (duration, callback, finalFunc) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let complection = Math.min(timeElapsed / duration, 1);

        callback(complection);

        if (timeElapsed < duration) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof finalFunc === "function") {
                finalFunc();
            }
        }
    }

    return _animateOverTime;
};

$.prototype.fadeIn = function (duration, display, finalFunc) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || "block";

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const ani = this.animateOverTime(duration, _fadeIn, finalFunc);
        requestAnimationFrame(ani);
    }

    return this;
};

$.prototype.fadeOut = function (duration, finalFunc) {
    for (let i = 0; i < this.length; i++) {
        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            if (complection === 1) {
                this[i].style.display = "none";
            }
        };

        const ani = this.animateOverTime(duration, _fadeOut, finalFunc);
        requestAnimationFrame(ani);
    }

    return this;
};

$.prototype.fadeToggle = function (duration, display, finalFunc) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === "none") {
            this[i].style.display = display || "block";

            const _fadeIn = (complection) => {
                this[i].style.opacity = complection;
            };

            const ani = this.animateOverTime(duration, _fadeIn, finalFunc);
            requestAnimationFrame(ani);
        } else {
            const _fadeOut = (complection) => {
                this[i].style.opacity = 1 - complection;
                if (complection === 1) {
                    this[i].style.display = "none";
                }
            };

            const ani = this.animateOverTime(duration, _fadeOut, finalFunc);
            requestAnimationFrame(ani);
        }
    }

    return this;
};
