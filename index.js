/*
 Laravel Elixir RTL Extension
 Developed by Pooya Parsa <pooya@pi0.ir>
 */

let postcss, rtlcss, gulp;
const Elixir = require('laravel-elixir');

class RTLTask extends Elixir.Task {

    /**
     * Create a new RTLTask instance.
     *
     * @param {string}    name
     * @param {GulpPaths} paths
     */
    constructor(name, paths) {
        super(name, null, paths);
        this.publicPath = Elixir.config.publicPath;
    }

    /**
     * Lazy load dependencies.
     */
    loadDependencies() {
        gulp = require('gulp');
        postcss = require('gulp-postcss');
        rtlcss = require('rtlcss');
    }

    /**
     * Register file watchers.
     */
    registerWatchers() {
        this.watch(this.src.path);
    }

    /**
     * Build the Gulp task.
     *
     * @param {Elixir.Plugins} $
     */
    gulpTask($) {
        return (gulp
                .src(this.src.path)
                .pipe(this.rtl($))
                .pipe(this.save($))
        );
    }

    rtl($) {
        this.recordStep('Making RTL Version');
        return postcss([rtlcss]);
    }

    save($) {
        this.recordStep('Saving RTL Version');
        return gulp.dest(this.output.path);
    }

}

Elixir.extend('rtl', function (src, output) {
    let paths=new Elixir.GulpPaths()
        .src(src, Elixir.config.publicPath)
        .output(output);
    new RTLTask('rtl',paths);
});

