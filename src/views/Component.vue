<template>
	<div>
		<div>
			<span>
				<input type="checkbox" id="diy1" value="ca" @click="addCom('ca')">	
				<label for="diy1">组件A</label>
			</span>
			
			<span>
				<input type="checkbox" id="diy2" value="cb" @click="addCom('cb')">	
				<label for="diy2">组件B</label>
			</span>	

		</div>
		<div class="content">
			<template v-for="(item,index) in comArray">
				<component :key="index" :is="item"></component>
			</template>
		</div>

	</div>
</template>
<script>
	
	export default {
		
		data(){
			return {
				comArray:[]
			}
		},
		methods:{
			addCom(id){
				if(this.comArray.includes(id)){
					
					return
				}
				this.comArray.push(id)
			}
		}
	}
	
</script>