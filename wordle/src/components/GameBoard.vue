<template>
    <v-container>
        <v-row v-for="rowIndex in 5" :key="'row-' + rowIndex" :id="'row-'+rowIndex">
            <v-col v-for="colIndex in 5" :key="'col-' + rowIndex + '-' + colIndex" @keydown="handleEnter(rowIndex, colIndex, $event)">
                <div class="border" :id="`cell-${rowIndex}-${colIndex}`"  :style="{ height: '5rem', width: '2rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem',
                    textTransform: 'uppercase'
                 }" :contenteditable="isEditable" @input="handleInput(rowIndex, colIndex, $event)"
                 @keydown="handleBackspace(rowIndex, colIndex, $event)"></div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import validate from '@/plugins/wordle';
    export default {
        props:{
            word:{
                type: String,
                required: true
            }
        },
        data() {
            return{
                isEditable: false,
                counter: 1
            }
        },
        async mounted(){
            await this.toggleDivs();
        },
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
            },
            handleEnter(rowIndex, colIndex, event)
            {
                if(event.key === 'Enter' && colIndex === 5)
                {
                    validate(word,);
                    this.counter++;
                    this.toggleDivs();
                    document.getElementById(`cell-${rowIndex+1}-${1}`).focus();
                }
            },
            async toggleDivs()
            {
                await document.querySelectorAll(`div[id*=cell-${this.counter}]`).forEach(div=>{
                    div.contentEditable = !this.isEditable;
                });
                await document.querySelectorAll(`div[id*=cell-${this.counter-1}]`).forEach(div=>{
                    div.contentEditable = false;
                });
            }
        },
    }
</script>