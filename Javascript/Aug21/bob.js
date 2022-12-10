(function(){

    function getNoofbrick(length,breath,thickness){
        const brickvol = 24*12*8;
        const actual_wall = 0.85;
        let volumeofwallincm = length*breath*thickness*100*100*100;
        return Math.ceil((actual_wall*volumeofwallincm)/brickvol);
    }

    console.log(getNoofbrick(24,8,0.6))
})();