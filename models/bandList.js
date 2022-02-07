
class Bandlist {
    constructor(){
        this.bands = [
            new Band('Linkin Park'),
            new Band('Ramstein'),
            new Band('Los Bunkers'),
            new Band('Radiohead')
        ];

    }
    addBand( name ) {
        const newBand = new Band( name );
        this.bands.push( newBand );
        return this.bands;
    }
    deleteBand( id ) {
        this.bands = this.bands.filter( ( band ) =>band.id === id );
    }
    getBands( ) {
        return this.bands;
    }
    increaseVotes( id ) {
        this.bands=this.bands.map( band => {
            if( band.id === id ){
                band.votes+=1;
            }
            return band;
        });
    }
    changeBandName( id, newName ) {
        this.bands=this.bands.map( band => {
            if( band.id === id ){
                band.name=newName;
            }
            return band;
        });
    }
}
module.exports = Bandlist;