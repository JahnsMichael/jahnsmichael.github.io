<script>
    import Chip from "./Chip.svelte";
    export let href, title, stacks;
</script>

<li class="link-card">
    <a {href}>
        <h2>
            {title}
            <span>&rarr;</span>
        </h2>
        <p>
            <slot />
        </p>
        <h3>Tech Stacks</h3>
        {#each stacks as stack}<Chip>{stack}</Chip>{/each}
    </a>
</li>

<style>
    .link-card {
        list-style: none;
        display: flex;
        padding: 0.15rem;
        background-image: var(--gradient);
        background-size: 400%;
        border-radius: 0.5rem;
        background-position: 100%;
        transition: background-position 0.6s var(--transition-cubic-bezier);
    }

    .link-card > a {
        width: 100%;
        text-decoration: none;
        line-height: 1.4;
        padding: 1em 1.3em;
        border-radius: 0.35rem;
        color: var(--text-color);
        background-color: var(--color-bg);
        opacity: 0.8;
    }

    h2 {
        margin: 0;
        transition: color 0.6s var(--transition-cubic-bezier);
    }

    p {
        margin-top: 0.75rem;
        margin-bottom: 0;
    }

    h2 span {
        display: inline-block;
        transition: transform 0.3s var(--transition-cubic-bezier);
    }

    .link-card:is(:hover, :focus-within) {
        background-position: 0;
        animation: var(--animation-gradient);
    }

    .link-card:is(:hover, :focus-within) h2 {
        color: #4f39fa;
    }

    .link-card:is(:hover, :focus-within) h2 span {
        transform: translateX(2px);
    }
</style>
