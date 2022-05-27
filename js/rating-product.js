// <a href="#"><img src="./img/delete.svg" alt="delete"></a>

function ratingProduct(shortName, fullName) {
    return `
        <div class="product-rating__block">
            <div class="product-rating__name">
                <span>
                    ${fullName}
                </span>
            </div>
            <div class="row row-column">
                <div class="form__field">
                    <textarea id="reason" data-required="true" name="reason" class="form__textarea"
                        placeholder="Укажите причину возврата товара, что Вам не понравилось?"></textarea>
                    <label for="reason" class="form__text-label">Укажите причину возврата товара, что Вам не
                        понравилось?</label>
                    <div class="field-error-tip">
                        Обязательное поле
                    </div>
                </div>
                <div class="form__field">
                    <textarea id="analog" data-required="true" name="analog" class="form__textarea"
                        placeholder="Укажите аналогичный товар, который Вы использовали ранее"></textarea>
                    <label for="analog" class="form__text-label">Укажите аналогичный товар, который Вы
                        использовали ранее</label>
                    <div class="field-error-tip">
                        Обязательное поле
                    </div>
                </div>
            </div>
            <div class="product-rating__wrap">
                <div class="product-rating__subtitle">
                    Оцените товар по пятибальной шкале
                </div>
                <div class="product-rating__grade">
                    <div class="product-rating__item">
                        <div class="product-rating__label">
                            Эффективность использования
                        </div>
                        <div class="form__radio-group">
                            <div class="rating-area">
                                <input type="radio" name="efficiency-${shortName}" id="efficiency-${shortName}-5" value="5">
                                <label for="efficiency-${shortName}-5"></label>
                                <input type="radio" name="efficiency-${shortName}" id="efficiency-${shortName}-4" value="4">
                                <label for="efficiency-${shortName}-4"></label>
                                <input type="radio" name="efficiency-${shortName}" id="efficiency-${shortName}-3" value="3">
                                <label for="efficiency-${shortName}-3"></label>
                                <input type="radio" name="efficiency-${shortName}" id="efficiency-${shortName}-2" value="2">
                                <label for="efficiency-${shortName}-2"></label>
                                <input type="radio" name="efficiency-${shortName}" id="efficiency-${shortName}-1" value="1">
                                <label for="efficiency-${shortName}-1"></label>
                            </div>
                            <div class="field-error-tip">
                                Обязательное поле
                            </div>
                        </div>
                    </div>    
                    <div class="product-rating__item">
                        <div class="product-rating__label">
                            Удобство использования
                        </div>
                        <div class="form__radio-group">
                            <div class="rating-area">
                                <input type="radio" name="convenience-${shortName}" id="convenience-${shortName}-5" value="5">
                                <label for="convenience-${shortName}-5"></label>
                                <input type="radio" name="convenience-${shortName}" id="convenience-${shortName}-4" value="4">
                                <label for="convenience-${shortName}-4"></label>
                                <input type="radio" name="convenience-${shortName}" id="convenience-${shortName}-3" value="3">
                                <label for="convenience-${shortName}-3"></label>
                                <input type="radio" name="convenience-${shortName}" id="convenience-${shortName}-2" value="2">
                                <label for="convenience-${shortName}-2"></label>
                                <input type="radio" name="convenience-${shortName}" id="convenience-${shortName}-1" value="1">
                                <label for="convenience-${shortName}-1"></label>
                            </div>
                            <div class="field-error-tip">
                                Обязательное поле
                            </div>
                        </div>
                    </div>    
                    <div class="product-rating__item">
                        <div class="product-rating__label">
                            Соотвествие качества товара его цене
                        </div>
                        <div class="form__radio-group">
                            <div class="rating-area">
                                <input type="radio" name="quality-${shortName}" id="quality-${shortName}-5" value="5">
                                <label for="quality-${shortName}-5"></label>
                                <input type="radio" name="quality-${shortName}" id="quality-${shortName}-4" value="4">
                                <label for="quality-${shortName}-4"></label>
                                <input type="radio" name="quality-${shortName}" id="quality-${shortName}-3" value="3">
                                <label for="quality-${shortName}-3"></label>
                                <input type="radio" name="quality-${shortName}" id="quality-${shortName}-2" value="2">
                                <label for="quality-${shortName}-2"></label>
                                <input type="radio" name="quality-${shortName}" id="quality-${shortName}-1" value="1">
                                <label for="quality-${shortName}-1"></label>
                            </div>
                            <div class="field-error-tip">
                                Обязательное поле
                            </div>
                        </div>
                    </div>    
                    <div class="product-rating__item">
                        <div class="product-rating__label">
                            Дизайн товара
                        </div>
                        <div class="form__radio-group">
                            <div class="rating-area">
                                <input type="radio" name="design-${shortName}" id="design-${shortName}-5" value="5">
                                <label for="design-${shortName}-5"></label>
                                <input type="radio" name="design-${shortName}" id="design-${shortName}-4" value="4">
                                <label for="design-${shortName}-4"></label>
                                <input type="radio" name="design-${shortName}" id="design-${shortName}-3" value="3">
                                <label for="design-${shortName}-3"></label>
                                <input type="radio" name="design-${shortName}" id="design-${shortName}-2" value="2">
                                <label for="design-${shortName}-2"></label>
                                <input type="radio" name="design-${shortName}" id="design-${shortName}-1" value="1">
                                <label for="design-${shortName}-1"></label>
                            </div>
                            <div class="field-error-tip">
                                Обязательное поле
                            </div>
                        </div>
                    </div>    
                    <div class="product-rating__item">
                        <div class="product-rating__label">
                            Общая оценка товара
                        </div>
                        <div class="form__radio-group">
                            <div class="rating-area">
                                <input type="radio" name="general-${shortName}" id="general-${shortName}-5" value="5">
                                <label for="general-${shortName}-5"></label>
                                <input type="radio" name="general-${shortName}" id="general-${shortName}-4" value="4">
                                <label for="general-${shortName}-4"></label>
                                <input type="radio" name="general-${shortName}" id="general-${shortName}-3" value="3">
                                <label for="general-${shortName}-3"></label>
                                <input type="radio" name="general-${shortName}" id="general-${shortName}-2" value="2">
                                <label for="general-${shortName}-2"></label>
                                <input type="radio" name="general-${shortName}" id="general-${shortName}-1" value="1">
                                <label for="general-${shortName}-1"></label>
                            </div>
                            <div class="field-error-tip">
                                Обязательное поле
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>

    `
}