<div class="chip-container">
    <div class="chip-item">
        <strong><slot /></strong>
    </div>
</div>

<style>
    .chip-container {
        background-image: var(--gradient);
        background-size: 400% 200%;
		background-position: 100%;
        display: inline-block;
        padding: 0.15rem;
        border-radius: 1rem;
        animation: var(--animation-gradient);
        transition: background-position 0.6s var(--transition-cubic-bezier);
        margin: 0.25rem;
    }

    .chip-item {
        background-color: var(--color-bg);
        border-radius: 1rem;
        padding: 0.5rem 1rem;
        opacity: 0.8;
    }

    .chip-container:is(:hover, :focus-within) {
        background-position: 0;
    }
</style>