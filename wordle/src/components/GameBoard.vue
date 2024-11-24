<template>
    <v-container>
        <v-row v-for="rowIndex in 5" :key="'row-' + rowIndex">
            <v-col v-for="colIndex in 5" :key="'col-' + rowIndex + '-' + colIndex">
                <div class="border" :id="`cell-${rowIndex}-${colIndex}`"  :style="{ height: '5rem', width: '2rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem'
                 }" contenteditable="true" @input="handleInput(rowIndex, colIndex, $event)"
                 @keydown="handleBackspace(rowIndex, colIndex, $event)"><sup :style="{display: 'none'}"></sup></div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        methods:{
            handleInput(rowIndex, colIndex, event){
                let col = document.getElementById(`cell-${rowIndex}-${colIndex}`);
                let nextCol = document.getElementById(`cell-${rowIndex}-${colIndex+1}`);
                const target = event.target;
                const content = target.innerText.trim();
                if(content.length>1)
                {
                    target.innerText = content.charAt(0);
                }
                col===target && content.length===1 ? nextCol.focus() : this.focus();
            },
            handleBackspace(rowIndex, colIndex, event){
                if(event.key === 'Backspace')
                {
                    const target = event.target;
                    target.innerText = "";
                    document.getElementById(`cell-${rowIndex}-${colIndex-1}`).focus();
                    
                }
            }
        },
    }
</script>