import "./accsets/main.css";
import "./accsets/responsive.css";

//làm theo mẫu website https://www.designzillas.com/

function Slider(props) {
  return (
    <div id="slider">
        <div class="dinosaur">
            <div class="slider__background">
                <div class="slider__background__Leaf1"></div>
                <div class="slider__background__Leaf2"></div>
                <div class="slider__backgound__dinosour-child">
                    <div class="sider__background__dinosour-child__text">
                        Đi thôi nào
                        <i class="fas fa-grin-hearts"></i>
                    </div>
                    <div class="slider__backgound__dinosour-child__eye-left"></div>
                    <div class="slider__backgound__dinosour-child__eye-right"></div>
                </div>
                <div class="slider__backgound__dinosour-child1">
                    <div class="sider__background__dinosour-child__text">
                        <i class="fas fa-angry"></i>
                        Chờ tôi với!!!
                    </div>
                    <div class="slider__backgound__dinosour-child__eye-left"></div>
                    <div class="slider__backgound__dinosour-child__eye-right"></div>
                </div>
                <div class="slider__backgound__dinosour-child2">
                    <div class="slider__backgound__dinosour-child__eye-left"></div>
                    <div class="slider__backgound__dinosour-child__eye-right"></div>
                </div>
                <div class="slider__background__bottom"></div>
                <div class="slider__background__content">
                    <p class="slider__background__content__description">Hành trình 5K, thả ga khám phá</p>
                    <h1 class="slider__background__content__title-main">Life is a journey<br /> not a destination</h1>
                </div>
            </div>
        </div>    
    </div>
  )
}

Slider.propTypes = {

}

export default Slider
