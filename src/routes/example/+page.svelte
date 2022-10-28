<script lang="ts">
    import {afterNavigate} from "$app/navigation"
    import {get} from "svelte/store";
    import {page} from "$app/stores"

    function scrollTo(fnEl) {
        const element = fnEl()
        if (!element) return
        element.scrollIntoView({behavior: "smooth"})
    }

    afterNavigate(() => {
        scrollTo(() => {
            const hash = get(page).url.hash
            console.log("hash", hash)
            return document.querySelector(hash)
        })
    })
</script>

<div class="content">

</div>
<a id="link" href="/">Go back</a>

<style>
    .content {
        height: 200vh;
        background: grey;
    }
</style>
