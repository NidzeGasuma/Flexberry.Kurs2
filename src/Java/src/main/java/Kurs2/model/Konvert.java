package Kurs2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kurs2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Конверт
 */
@Entity(name = "IISKurs2Конверт")
@Table(schema = "public", name = "Конверт")
public class Konvert {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ИмяДок")
    private String имядок;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZagrFajla")
    @Convert("ZagrFajla")
    @Column(name = "ЗагрФайла", length = 16, unique = true, nullable = false)
    private UUID _zagrfajlaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZagrFajla", insertable = false, updatable = false)
    private ZagrFajla zagrfajla;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "VidDok")
    @Convert("VidDok")
    @Column(name = "ВидДок", length = 16, unique = true, nullable = false)
    private UUID _viddokid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "VidDok", insertable = false, updatable = false)
    private VidDok viddok;


    public Konvert() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getИмяДок() {
      return имядок;
    }

    public void setИмяДок(String имядок) {
      this.имядок = имядок;
    }


}