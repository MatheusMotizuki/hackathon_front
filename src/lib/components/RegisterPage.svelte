<div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center bg-no-repeat bg-cover" style="background-image: url(https://c4.wallpaperflare.com/wallpaper/526/8/1002/library-interior-interior-design-books-wallpaper-preview.jpg)">
    <div class="container max-w-screen-lg mx-auto">
      <div>
        <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 shadow-lg">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div class="text-gray-600">
              <p class="font-bold text-2xl">Informações da escola.</p>
              <p class="font-semibold">Por favor, preencha com atenção.</p>
              <div class="w-48 h-48 pl-8 pt-6 flex">
                  <img src="/src/lib/assets/bulb.jpg" alt=""/>
              </div>
            </div>
  
            <div class="lg:col-span-2">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div class="md:col-span-5">
                  <label for="full_name">Nome da escola</label>
                  <input type="text" name="nome_da_escola" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="C.E Jardim do Aprendizado"value="" />
                </div>
  
                <div class="md:col-span-5">
                  <label for="email">Email da escola</label>
                  <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="exemplo@educacao.gov.br" />
                </div>
  
                <div class="md:col-span-3">
                  <label for="address">Rua</label>
                  <input type="text" name="rua" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="Rua Carneiro Leão" />
                </div>
  
                <div class="md:col-span-2">
                  <label for="city">Cidade</label>
                  <input type="text" name="cidade" id="cidade" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="São Paulo" />
                </div>
  
                <div class="md:col-span-2">
                  <label for="country">Região</label>
                  <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input name="country" id="country" placeholder="São Paulo" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                    <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                      <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                    <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5H7Z"/></svg>
                    </button>
                  </div>
                </div>
  
                <div class="md:col-span-2">
                  <label for="state">Estado</label>
                  <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input name="state" id="state" placeholder="Estado" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                    <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                      <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                    <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5H7Z"/></svg>
                    </button>
                  </div>
                </div>
  
                <div class="md:col-span-1">
                  <label for="zipcode">CEP</label>
                  <input type="text" name="CEP" id="CEP" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="_____-___" value="" />
                </div>

                <div class="md:col-span-5 flex justify-center">
                  <div class="inline-flex items-end">
                    <button class="bg-violet-600 hover:bg-violet-900 text-white font-bold py-2 px-4 rounded">Enviar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>