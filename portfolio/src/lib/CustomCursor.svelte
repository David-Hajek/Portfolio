<script lang="ts">
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    let cursorX: number = 0;
    let cursorY: number = 0;
    let cursor: HTMLDivElement;
    let isClickable = false;

    function updateCursorPosition(e: MouseEvent) {
        if (cursor) {
            cursorX = e.clientX - 10;
            cursorY = e.clientY - 10;
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;

            const target = e.target as HTMLElement;
            isClickable = target.matches('a, button, [role="button"], input, select, textarea') || 
                         target.closest('a, button, [role="button"], input, select, textarea') !== null;
        }
    }

    onMount(() => {
        if (browser) {
            document.addEventListener('mousemove', updateCursorPosition);
            return () => {
                document.removeEventListener('mousemove', updateCursorPosition);
            };
        }
    });
</script>

<div class="custom-cursor" class:clickable={isClickable} bind:this={cursor} />

<style>
    .custom-cursor {
        width: 30px;
        height: 30px;
        background-color: white;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        mix-blend-mode: difference;
        z-index: 9999;
        left: 0;
        top: 0;
        transition: transform 0.2s ease;
    }

    .clickable {
        transform: scale(1.5);
    }

    :global(a, button, [role="button"], input, select, textarea) {
        cursor: none !important;
    }
    :global(body) {
        cursor: none !important;
    }
</style>
