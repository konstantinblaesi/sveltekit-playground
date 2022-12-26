<script lang="ts">
    import h337 from "@mars3d/heatmap.js"

    let heatmap

    function createHeatmap(node: HTMLElement) {
        heatmap = h337.create({
            container: node,
            // a waterdrop gradient ;-)
            gradient: { .1: 'rgba(0,0,0,0)', 0.25: "rgba(0,0,90, .6)", .6: "blue", .9: "cyan", .95: 'rgba(255,255,255,.4)'},
            maxOpacity: .6,
            radius: 10,
            blur: .90
        });

        // boundaries for data generation
        const width = (+window.getComputedStyle(document.body).width.replace(/px/,''));
        const height = (+window.getComputedStyle(document.body).height.replace(/px/,''));

        const generate = function() {
            const max = 100;
            const min = 0;
            const t = [];

            const x = (Math.random()* width) >> 0;
            const y = (Math.random()* height) >> 0;
            const c = 100;
            const r = (Math.random()* 100) >> 0;

            // add the datapoint to heatmap instance
            // @ts-ignore
            heatmap.addData({ x: x, y:y, value: c, radius: r});
        };

        // this generates new datapoints in a kind of random timing
        setTimeout(function test() {
            const rand = (Math.random() * 500) >> 0;
            generate();
            setTimeout(test, rand);
        }, 100);
    }
</script>


<div id="heatmap" use:createHeatmap style="height: 100vh; width: 100vw"></div>