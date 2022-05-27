function addProduct(idx) {
    return `<div class="check-registration__item js-check-registration-product" data-product-idx="${idx}">
                <div class="row">
                    <div class="col-12">
                        <div class="check-registration__subtitle ta-c">
                            Выберите бренд
                        </div>
                        <div class="form__field">
                            <input id="brand-checked-${idx}" type="text" data-type="txt" data-required="true"
                                name="brand" class="form__text-input js-autocomplete js-brand-checked"
                                autocomplete="off" placeholder="Бренд">
                            <label for="brand-checked-${idx}" class="form__text-label">Бренд</label>
                            <span class="form__text-input--decor"></span>
                            <div class="form__drpdwn-list js-drpdwn-list">
                                <ul>
                                    <li class="option" data-value="brand1">Brand1</li>
                                    <li class="option" data-value="brand2">Brand2</li>
                                    <li class="option" data-value="brand3">Brand3</li>
                                    <li class="option" data-value="brand4">Brand4</li>
                                    <li class="option" data-value="brand5">Brand5</li>
                                    <li class="option nomach" data-value="nomach">nomach</li>
                                </ul>
                            </div>
                            <div class="field-error-tip" data-error-text-2="Обязательное поле">
                                Обязательное поле
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="check-registration__subtitle ta-c">
                            Выберите товар
                        </div>
                        <div class="form__field">
                            <input id="product-checked-${idx}" type="text" data-type="txt" data-required="true"
                                name="product" class="form__text-input js-autocomplete js-product-checked"
                                autocomplete="off" placeholder="Товар" disabled>
                            <label for="product-checked-${idx}" class="form__text-label">Товар</label>
                            <span class="form__text-input--decor"></span>
                            <div class="form__drpdwn-list js-drpdwn-list">
                                <ul>
                                    <li class="option" data-brand="brand1" data-value="product1">Brand1 Product1</li>
                                    <li class="option" data-brand="brand1" data-value="product2">Brand1 Product2</li>
                                    <li class="option" data-brand="brand1" data-value="product3">Brand1 Product3</li>
                                    <li class="option" data-brand="brand1" data-value="product4">Brand1 Product4</li>
                                    <li class="option" data-brand="brand1" data-value="product5">Brand1 Product5</li>
                                    <li class="option" data-brand="brand2" data-value="product1">Brand2 Product1</li>
                                    <li class="option" data-brand="brand2" data-value="product2">Brand2 Product2</li>
                                    <li class="option" data-brand="brand2" data-value="product3">Brand2 Product3</li>
                                    <li class="option" data-brand="brand2" data-value="product4">Brand2 Product4</li>
                                    <li class="option" data-brand="brand2" data-value="product5">Brand2 Product5</li>
                                    <li class="option" data-brand="brand3" data-value="product1">Brand3 Product1</li>
                                    <li class="option" data-brand="brand3" data-value="product2">Brand3 Product2</li>
                                    <li class="option" data-brand="brand3" data-value="product3">Brand3 Product3</li>
                                    <li class="option" data-brand="brand3" data-value="product4">Brand3 Product4</li>
                                    <li class="option" data-brand="brand3" data-value="product5">Brand3 Product5</li>
                                    <li class="option" data-brand="brand4" data-value="product1">Brand4 Product1</li>
                                    <li class="option" data-brand="brand4" data-value="product2">Brand4 Product2</li>
                                    <li class="option" data-brand="brand4" data-value="product3">Brand4 Product3</li>
                                    <li class="option" data-brand="brand4" data-value="product4">Brand4 Product4</li>
                                    <li class="option" data-brand="brand4" data-value="product5">Brand4 Product5</li>
                                    <li class="option" data-brand="brand5" data-value="product1">Brand5 Product1</li>
                                    <li class="option" data-brand="brand5" data-value="product2">Brand5 Product2</li>
                                    <li class="option" data-brand="brand5" data-value="product3">Brand5 Product3</li>
                                    <li class="option" data-brand="brand5" data-value="product4">Brand5 Product4</li>
                                    <li class="option" data-brand="brand5" data-value="product5">Brand5 Product5</li>
                                    <li class="option nomach" data-value="nomach">nomach</li>
                                </ul>
                            </div>
                            <div class="field-error-tip" data-error-text-2="Обязательное поле">
                                Обязательное поле
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
}
