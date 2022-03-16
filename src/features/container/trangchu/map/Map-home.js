import React, { Component } from 'react'
import { connect } from 'react-redux'
import './map.css'
export class Map_home extends Component {
    render() {
        return (
            <div id="map_home">
                <div id="map-container-google-1" className="z-depth-1-half map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29946.637186399348!2d105.95794199068808!3d20.245158845674492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313670ab6f10c8c1%3A0x888a79884edbe5cc!2zVHAuIE5pbmggQsOsbmgsIE5pbmggQsOsbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1645811396913!5m2!1svi!2s" frameBorder={0} style={{ border: 0 }} allowFullScreen />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Map_home)
