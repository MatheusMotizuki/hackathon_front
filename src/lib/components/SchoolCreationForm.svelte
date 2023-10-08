<script>
    import image from "$lib/assets/image3.jpg"
</script>

<form method="POST" action="">
    <div  class="flex p-4 items-stretch">
        <div class="flex-auto " >
            <div>
               <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome da instituição<object data="" type=""></object></label>
               <input type="text" name="name" id="name" placeholder="Escola " class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            </div>
            <label for="rua" class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Endereço</label>
            <div>
                <input type="text" name="rua" id="rua" placeholder="Rua" 
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            </div>
            <div class="mt-2 flex  space-x-2">
               
               <input type="text" name="bairro" id="rua" placeholder="Bairro" 
               class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
               
               <input type="text" name="bairro" id="num" placeholder="Número" 
               class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
               <label for="cep" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CEP</label>
               <input type="text" name="cep" id="cep" placeholder="_____-___" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            </div>
            
            <button type="submit" class="bottom-0 w-full text-white bg-primary-600 mt-10 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 h-fit">Crie uma conta</button>
         </div>
         <div class=" w-48 ml-9">
            <label for="rua" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Foto de apresentação</label>
            <img class="w-48 h-48 sm:w-48 object-cover rounded-t-lg " src={image} alt="">
            <div>
               <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload file</label>
               <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file">
               <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">Essa foto aparecerá para os novos usuários que estiverem em busca de ingressar em uma instituição de ensino</div>
            </div>
         </div>
    </div>
    
 </form>