function solve(){
    let obj = {
        fighter(fighterName){
           let fighterObj = {
               name:fighterName,
               health:100,
               stamina:100,
               fight(){
                fighterObj.stamina--;
                console.log(`${fighterObj.name} slashes at the foe!`);
               } 
           }; 
           return fighterObj;
        },
        mage(mageName){
            let mageObj = {
                name:mageName,
                health:100,
                mana:100,
                cast(spellName){
                    mageObj.mana--;
                    console.log(`${mageObj.name} cast ${spellName}`);
                }
            };
            return mageObj;
        }
            
    }; 

    return obj;
}

//input
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
